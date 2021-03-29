import styles from './simple.module.scss';

const cx = (classes) => {
  let str = '';
  classes.forEach((value, key) => {
    if (value) str += ` ${key}`;
  });
  return str;
}

export default function Simple({children, isGreen, hasBorder, hasShadow}) {
  const classes = new Map([
    [styles.wrapper, true],
    [styles.wrapperGreen, isGreen]
  ]);

  const rowClasses = new Map([
    [styles.rowShadow, hasShadow],
    [styles.rowBorder, hasBorder]
  ]);

  return (
    <div className={styles.container}>
      <div className={cx(rowClasses)}>
        <div className={styles.col}>
          <div className={cx(classes)}>{children}</div>
        </div>
      </div>
    </div>
  )
}