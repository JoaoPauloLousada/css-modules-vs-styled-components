import Head from 'next/head'
import { useState } from 'react'
import Simple from '../components/Simple'
import StyledSimple from '../components/styled'

const arr = Array.from(Array(5000).keys())

export default function Home() {
  const [show, setShow] = useState('css')
  const [isGreen, setIsGreen] = useState(false)
  const [hasBorder, setHasBorder] = useState(false)
  const [hasShadow, setHasShadow] = useState(false)

  return (
    <>
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <button onClick={() => setShow('css')}>css</button>
          <button onClick={() => setShow('styled')}>styled</button>
          <br/>
          <br/>
          <button onClick={() => setIsGreen(!isGreen)}>toggle green</button>
          <button onClick={() => setHasBorder(!hasBorder)}>toggle border</button>
          <button onClick={() => setHasShadow(!hasShadow)}>toggle shadow</button>
        </div>

        <main>
          <div>
            {show == 'css' && arr.map((_, i) => (
              <Simple key={i} isGreen={isGreen} hasBorder={hasBorder} hasShadow={hasShadow}> 
                Simple {i}
              </Simple>
            ))}
          </div>
          <div>
            {show == 'styled' && arr.map((_, i) => 
              <StyledSimple key={i} isGreen={isGreen} hasBorder={hasBorder} hasShadow={hasShadow}>
                Styled Simple {i}
              </StyledSimple>)}
          </div>
        </main>
      </div>
    </>
  )
}
