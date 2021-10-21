import { Button, Card, Tag } from 'antd'
import styles from './CardEventDetail.module.scss'
import Link from 'next/link'
import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const CardEventDetail = () => {
  return (
    <div className={styles.pages}>
      <Card className={styles.card}>
        <div className={styles.container}>
          <div className={styles.title}>
            <a href="#">TO 4 - UTBK 2022 | PPU | TPS - Pengetahuan dan Pemahaman Umum</a>
          </div>
          <div className={styles.time}>
            <div className={styles.wrapperDesc}>
              <h3>Jumlah Soal : </h3>
              <h4>10 Soal</h4>
            </div>
            <div className={styles.wrapperDesc}>
              <h3>Durasi : </h3>
              <h4>25 Menit</h4>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default CardEventDetail
