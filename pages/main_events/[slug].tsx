import 'antd/dist/antd.css';
import Link from 'next/link';
import CustomLayout from '../../components/molecuels/Layout';
import { Breadcrumb, Dropdown, Button, Menu } from 'antd';
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





const TryOutDetail = () => {
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
          {/* <Breadcrumb.Item>
            <Link href="/domain">{router.query.slug}</Link>
          </Breadcrumb.Item> */}
        </Breadcrumb>
        <div className={styles.container}>
          <h6>TO 4 - UTBK Saintek 2022</h6>
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
          <div className={styles.content}>
            <CardTO previewEven />
            <CardTO previewEven />
            {
              daftar ?
                <>
                  {
                    isTime ? <></> : <> <Button className={styles.belumDimulai}>Belum dimulai</Button></>
                  }

                </>
                :
                <>
                  <Button className={styles.daftar}>Daftar TO</Button>
                </>
            }
            <div className={styles.promotion}>
              <span>Follow, Like dan Share Facebook atau Instagram kami ya.</span>
              <div className={styles.socialMedia}>
                <Button className={styles.facebook}><FacebookIcon /> <span>Facebook</span></Button>
                <Button className={styles.instagram}><InstagramIcon /> <span>Instagarm</span></Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </CustomLayout >
  )
}

export default TryOutDetail
