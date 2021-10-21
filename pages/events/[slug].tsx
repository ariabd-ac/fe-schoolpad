import 'antd/dist/antd.css';
import Link from 'next/link';
import CustomLayout from '../../components/molecuels/Layout';
import { Breadcrumb, Table, Button, Menu } from 'antd';
import styles from '../../styles/MainEventsDetail.module.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CardBlog from '../../components/molecuels/CardBlog';
import CategoryBlog from '../../components/atoms/CategoryBlog';
import { Tabs } from 'antd';
import CardTO from '../../components/molecuels/CardTO';

import { useRouter } from 'next/router';
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';



const columns = [
  {
    title: 'Sesi',
    dataIndex: 'sesi',
    width: '50%',
  },
  {
    title: 'Jumlah Soal',
    dataIndex: 'jumlahSoal',
  },
  {
    title: 'Waktu',
    dataIndex: 'waktu',
  },
];
const data = [
  {
    key: '1',
    sesi: 'TO 4 - UTBK 2022 | PU | TPS - Pengetahuan dan Pemahaman Umum',
    jumlahSoal: 32,
    waktu: '22 Menit',
  },
  {
    key: '2',
    sesi: 'TO 4 - UTBK 2022 | PBM | TPS - Kemampuan Memahami Bacaan dan Menulis',
    jumlahSoal: 32,
    waktu: '22 Menit',
  },
  {
    key: '3',
    sesi: 'TO 4 - UTBK 2022 | PPU | TPS - Kemampuan Penalaran Umum',
    jumlahSoal: 32,
    waktu: '22 Menit',
  },
  {
    key: '4',
    sesi: 'TO 4 - UTBK 2022 | BInggris | TPS - Bahasa Inggris',
    jumlahSoal: 32,
    waktu: '22 Menit',
  },
  {
    key: '5',
    sesi: 'TO 4 - UTBK 2022 | PK | TPS - Pengetahuan Kuantitatif',
    jumlahSoal: 32,
    waktu: '22 Menit',
  },


];



const EventDetail = () => {
  const [daftar, setDaftar] = useState(true)
  const [isTime, setIsTime] = useState(true)
  const router = useRouter();
  console.log("router", router.query.slug)

  return (
    <CustomLayout>
      <div className={styles.pages}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link href="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href="/main_events">Try Out</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href="/main_events">TO 4 - UTBK Saintek 2022</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href="/main_events">TPS 4 - UTBK 2022</Link>
          </Breadcrumb.Item>
          {/* <Breadcrumb.Item>
            <Link href="/domain">{router.query.slug}</Link>
          </Breadcrumb.Item> */}
        </Breadcrumb>
        <div className={styles.container}>
          <h6>TPS 4 - UTBK 2022</h6>
          <div className={styles.filter}>
            <div className={styles.ujian}>
              <CalendarTodayTwoToneIcon /> <span>Daftar: 12 Oct, 00:00 - 24 Oct 2021, 18:00</span>
            </div>
            <div className={styles.daftar}>
              <CalendarTodayTwoToneIcon /> <span>Ujian: 20 Oct, 09:00 - 24 Oct 2021, 23:59</span>
            </div>
            <div className={styles.peserta}>
              <PersonIcon /> <span>389</span>
            </div>
          </div>
          <div className={styles.filter}>
            <div className={styles.ujian}>
              <CalendarTodayTwoToneIcon /> <span>Jumlah Soal: 129</span>
            </div>
            <div className={styles.ujian}>
              <CalendarTodayTwoToneIcon /> <span>120 Menit</span>
            </div>
          </div>
          <div className={styles.content}>
            <div style={{ width: '100%', marginBottom: 30 }}>

              <Table columns={columns} dataSource={data} size="middle" pagination={false} />

            </div>,
            {
              daftar ?
                <>
                  {
                    isTime ?
                      <>
                        <Button type="primary" className={styles.btnDafatarTO}><Link href="/events/detail_events">Kerjakan</Link></Button>
                      </> :
                      <>
                        <Button type="primary" className={styles.btnIsDaftar}><Link href="#">Belum Mulai</Link></Button>
                      </>
                  }
                </>
                :
                <>
                  <Button className={styles.daftar}>Daftar TO</Button>
                </>
            }

          </div>

        </div>
      </div>
    </CustomLayout >
  )
}

export default EventDetail
