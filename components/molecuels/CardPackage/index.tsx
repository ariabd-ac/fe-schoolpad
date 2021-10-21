import { Button, Card, Tag } from 'antd'
import styles from './CardPackage.module.scss'
import Link from 'next/link'
import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const CardPackage = () => {
  return (
    <div className={styles.pages}>
      <Card className={styles.card}>
        <div className={styles.container}>
          <div className={styles.title}>
            <a href="#">Pos Test BAB 1. Persamaan dan Pertidaksamaan Linear Nilai Mutlak</a>
          </div>
          <div className={styles.time}>
            <div className={styles.wrapperDesc}>
              <MenuBookSharpIcon />
              <span>10 Soal</span>
            </div>
            <div className={styles.wrapperDesc}>
              <WatchLaterRoundedIcon />
              <span>25 Menit</span>
            </div>
          </div>
          <div className={styles.tag}>
            <Tag color="#ddf1ff" style={{ color: '#5b88f2', fontSize: 12, fontWeight: 'normal', paddingTop: 4, paddingBottom: 4, paddingLeft: 10, paddingRight: 10, borderRadius: 8 }}>
              BILOGI
            </Tag>
            <Tag color="#ddf1ff" style={{ color: '#5b88f2', fontSize: 12, fontWeight: 'normal', paddingTop: 4, paddingBottom: 4, paddingLeft: 10, paddingRight: 10, borderRadius: 8 }}>
              BILOGI
            </Tag>
            <Tag color="#ddf1ff" style={{ color: '#5b88f2', fontSize: 12, fontWeight: 'normal', paddingTop: 4, paddingBottom: 4, paddingLeft: 10, paddingRight: 10, borderRadius: 8 }}>
              BILOGI
            </Tag>
            <Tag color="#ddf1ff" style={{ color: '#5b88f2', fontSize: 12, fontWeight: 'normal', paddingTop: 4, paddingBottom: 4, paddingLeft: 10, paddingRight: 10, borderRadius: 8 }}>
              BILOGI
            </Tag>
          </div>
          <div className={styles.desc}>
            <p>Paket ini berisi kumpulan soal-soal sesi Matematika Saintek, Tryout UTBK 2021 - Schoolpad ...</p>
          </div>
          <div className={styles.btnWraper}>
            <div className={styles.btn}>
              <Button type="primary" className={styles.preview}><SearchRoundedIcon /><Link href="/packages/2"><span>Preview</span></Link></Button>
            </div>
            <div className={styles.btn}>
              <Button type="primary" className={styles.lihat}>Lihat</Button>
            </div>
          </div>

        </div>
      </Card>
    </div>
  )
}

export default CardPackage
