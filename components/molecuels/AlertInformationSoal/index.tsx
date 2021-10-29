import styles from './AlertInformationSoal.module.scss'

interface LevelProps {
  orange: boolean,
}

const Level = ({ orange }: LevelProps) => {

  if (orange) {
    return (
      <>
        <div className={styles.levelOrange}></div>
      </>
    )
  }


  return (
    <>
      <div className={styles.levelGrey}></div>
    </>
  )
}

const AlertInformationSoal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h5>Informasi tentang tingkat kesulitan soal</h5>
      </div>
      <div className={styles.body}>
        <div className={styles.wrapper}>
          <div className={styles.level}>
            <Level orange />
            <Level orange={false} />
            <Level orange={false} />
          </div>
          <div className={styles.descLevel}>
            <span>(Tingkat kesulitan: Mudah, {`>`} 70% menjawab benar)</span>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.level}>
            <Level orange />
            <Level orange />
            <Level orange={false} />
          </div>
          <div className={styles.descLevel}>
            <span>(Tingkat kesulitan: Sedang, 30% - 70% menjawab benar)</span>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.level}>
            <Level orange />
            <Level orange />
            <Level orange />
          </div>
          <div className={styles.descLevel}>
            <span>(Tingkat kesulitan: Sulit, {`<`} 30% menjawab benar)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlertInformationSoal
