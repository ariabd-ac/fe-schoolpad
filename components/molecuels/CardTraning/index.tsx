import { Button, Card, Tag } from 'antd';
import styles from './CardTraning.module.scss'
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import Link from 'next/link'

const CardTraning = () => {
  return (
    <div className={styles.page}>
      <Card className={styles.card}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.icon}>
              <div className={styles.borderIcon}>
                <LibraryBooksOutlinedIcon />
              </div>
            </div>
            <div className={styles.desc}>
              <a href="#">Pos Test BAB 1. Persamaan dan Pertidaksamaan Linear Nilai Mutlak</a>
              <div className={styles.tag}>
                <Tag color="#ffe7b8" style={{ color: '#4e5155', fontSize: 16, fontWeight: 600, paddingTop: 11, paddingBottom: 11, paddingLeft: 16, paddingRight: 16, borderRadius: 8 }}>Nilai Terakhir: 100.0</Tag>
                <Link href="#"><Tag color="#e0f2ff" style={{ color: '#5b88f2', fontSize: 16, fontWeight: 600, paddingTop: 11, paddingBottom: 11, paddingLeft: 16, paddingRight: 16, borderRadius: 8, cursor: 'pointer' }}>Lihat Solusi</Tag></Link>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.btn}>
              <Button type="primary" className={styles.btnDetail}>Detail</Button>
            </div>
          </div>
        </div>

      </Card>
    </div>
  )
}

export default CardTraning
