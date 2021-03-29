import styled, {css} from 'styled-components'

const Container = styled.div`
  padding: 1rem;
  margin: 0 1rem;
`
const Row = styled.div`
  ${({hasBorder}) => hasBorder && css`border: 2px solid black;`};
  ${({hasShadow}) => hasShadow && css`box-shadow: 2px 2px 5px 5px;`};
`
const Col = styled.div`
  padding: 0 1rem;
`
const Wrapper = styled.div`
  background-color: aqua;
  ${({isGreen}) => isGreen && css`
    background-color: lightgreen;
  `};
`

export default function StyledSimple({children, isGreen, hasBorder, hasShadow}) {
  return (
    <>
      <Container>
        <Row hasBorder={hasBorder} hasShadow={hasShadow}>
          <Col>
            <Wrapper isGreen={isGreen}>{children}</Wrapper>
          </Col>
        </Row>
      </Container>
    </>
  )
}