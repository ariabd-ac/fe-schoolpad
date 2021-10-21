import 'antd/dist/antd.css';
import Link from 'next/link';
import CustomLayout from '../../components/molecuels/Layout';
import { Breadcrumb, Dropdown, Button, Menu, Pagination } from 'antd';
import styles from '../../styles/DetailEvents.module.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CardBlog from '../../components/molecuels/CardBlog';
import CategoryBlog from '../../components/atoms/CategoryBlog';
import { Tabs } from 'antd';
import CardTO from '../../components/molecuels/CardTO';
import CardEventDetail from '../../components/molecuels/CardEventDetail';






const DetailEvents = () => {

  const { TabPane } = Tabs;

  const callback = (key: any) => {
    console.log(key);
  }


  return (
    <CustomLayout>
      <div className={styles.pages}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link href="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href="/packages">Events</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href="#">TPS 4 - UTBK 2022</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className={styles.container}>
          <div className={styles.title}>
            <h6>Paket Latihan</h6>
          </div>
          <div className={styles.filter}>
            <div className={styles.text}>
              <h3>Jumlah Soal :</h3>
              <h4>20</h4>
            </div>
            <div className={styles.text}>
              <h3>Total Durasi : </h3>
              <h4>20 Menit</h4>
            </div>
            <div className={styles.text}>
              <h3>Maksimal Jumlah Percobaan : </h3>
              <h4>2</h4>
            </div>
            <div className={styles.text}>
              <h2>Sesi Ujian</h2>
            </div>
          </div>
          <div className={styles.content}>
            <CardEventDetail />
            <CardEventDetail />
            <CardEventDetail />
            <CardEventDetail />
            <CardEventDetail />
            <CardEventDetail />
          </div>
          <div className={styles.footer}>
            <h5>PASTIKAN KONEKSI INTERNET ANDA LANCAR DAN STABIL SEBELUM MEMULAI UJIAN</h5>
            <Button type="primary" className={styles.btn}>Mulai Ujian</Button>
          </div>

        </div>
      </div>
    </CustomLayout >
  )
}

export default DetailEvents
