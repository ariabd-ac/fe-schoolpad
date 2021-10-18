import { Card, Button, Row, Col, Menu, Dropdown, Space } from 'antd';
import Link from 'next/link'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import styles from './CardTO.module.scss'
import { useState } from 'react';

const menu = (
  <Menu>
    <Menu.Item>
      <Button type="primary" className={styles.btnIkutLagi}>Ikut Lagi</Button>
    </Menu.Item>
  </Menu>
);


const CardTO = () => {
  const [isUjian, setUjian] = useState(false)
  return (
    // <Row className={styles.container}>
    <div className={styles.pages}>
      <Card className={styles.card} bodyStyle={{ paddingTop: 24, paddingRight: 0, paddingBottom: 32, paddingLeft: 24, borderRadius: 24, }}>
        <div className={styles.header}>
          <div className={styles.wrapIcon}>
            {/* <LibraryBooksIcon className={styles.icon} fontSize="large" /> */}
            <img src="/assets/img/group-22.svg" alt="logo" />
          </div>
          <div className={styles.wrapFree}>
            <h6>Free</h6>
          </div>
        </div>
        <div className={styles.title}>
          <h3>TO 4 - UTBK Soshum 2022</h3>
        </div>
        <div className={styles.desc}>
          <div className={styles.soal}><h6>139 Soal</h6></div>
          <div className={styles.totalTime}><h6>139 Menit</h6></div>
        </div>
        <div className={styles.time}>
          <div className={styles.daftar}>
            <h6><span>Daftar:</span> 12 Oct, 00:00 - 24 Oct 2021, 18:00</h6>
          </div>
          <div className={styles.ujian}>
            <h6><span>Ujian:</span> 12 Oct, 00:00 - 24 Oct 2021, 18:00</h6>
          </div>
        </div>
        <div className={styles.countdown}>
          <div className={styles.timer}>
            <span>06:</span>
            <span>14:</span>
            <span>10:</span>
            <span>10</span>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.preview}>
            <Button type="primary" className={styles.btnPreview}><Link href="/auth/signup">Preview</Link></Button>
          </div>
          <div className={styles.dropdown}>
            {
              isUjian ?
                <>
                  <Dropdown overlay={menu} placement="bottomRight">
                    <Button type="primary" className={styles.btnDropDown}>Lihat Hasil</Button>
                  </Dropdown>

                </> :
                <>
                  <Button type="primary" className={styles.btnDafatarTO}><Link href="/auth/signup">Daftar TO</Link></Button>
                </>
            }


          </div>
        </div>
      </Card>
    </div>
    // </Row>

  )
}

export default CardTO
