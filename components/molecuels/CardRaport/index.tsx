import styles from '../../../styles/Raport.module.scss'

interface CardRaportProps {
  primary: boolean,
  secondary: boolean,
  ternary: boolean,
}


const CardRaport = ({ secondary, ternary }: CardRaportProps) => {

  if (secondary) {
    return (
      <div className={styles.cardRaportSecondary}>
        <div className={styles.time}>
          <span>0 Menit</span>
        </div>
        <div className={styles.desc}>
          <span>Latihan Soal Bulan ini</span>
        </div>
      </div>
    )
  }

  if (ternary) {
    return (
      <div className={styles.cardRaportTernary}>
        <div className={styles.time}>
          <span>10 Menit</span>
        </div>
        <div className={styles.desc}>
          <span>Latihan Soal Bulan ini</span>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.cardRaport}>
      <div className={styles.time}>
        <span>0 Menit</span>
      </div>
      <div className={styles.desc}>
        <span>Latihan Soal Bulan ini</span>
      </div>
    </div>
  )
}

export default CardRaport