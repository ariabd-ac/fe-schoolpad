

import 'antd/dist/antd.css';
import Link from 'next/link';
import CustomLayout from '../../components/molecuels/Layout';
import { Breadcrumb, Dropdown, Button, Menu } from 'antd';
import styles from '../../styles/NextPreview.module.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CardBlog from '../../components/molecuels/CardBlog';
import CategoryBlog from '../../components/atoms/CategoryBlog';
import { Tabs } from 'antd';
import CardTO from '../../components/molecuels/CardTO';






const NextPreview = () => {



  const callback = (key: any) => {
    console.log(key);
  }


  return (
    <CustomLayout>
      <div className={styles.pages}>
        <div className={styles.container}>
          <div className={styles.filter}>
          </div>
          <div className={styles.content}>
            <div className={styles.counters}>
              <div className={styles.timer}>
                <span>00:00:00</span>
              </div>
            </div>
            <div className={styles.description}>
              <div className={styles.ujian}>
                <h3>Nama Ujian: </h3> <h4> TO 4 - UTBK 2022 | PU | TPS - Kemampuan Penalaran Umum</h4>
              </div>
              <div className={styles.ujian}>
                <h3>Jumlah Soal: </h3> <h4>20</h4>
              </div>
              <div className={styles.ujian}>
                <h3>Durasi: </h3> <h4>20 menit</h4>
              </div>
            </div>
            <div className={styles.ket}><span>KLIK TOMBOL DI BAWAH UNTUK MEMULAI UJIAN SEKARANG</span></div>
            <div className={styles.footer}>
              <Button type="primary" className={styles.btn}>Mulai Ujian Sekarang</Button>
              {/* <div >
              </div> */}
            </div>
          </div>

        </div>
      </div>
    </CustomLayout >
  )
}

export default NextPreview
