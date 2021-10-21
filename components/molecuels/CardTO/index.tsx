import { Card, Button, Row, Col, Menu, Dropdown, Space, CardProps } from 'antd';
import Link from 'next/link'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import styles from './CardTO.module.scss'
import { useState } from 'react';
import DateRangeTwoToneIcon from '@mui/icons-material/DateRangeTwoTone';


const menu = (
  <Menu>
    <Menu.Item>
      <Button type="primary" className={styles.btnIkutLagi}>Ikut Lagi</Button>
    </Menu.Item>
  </Menu>
);

interface CardTOProps {
  ujian?: boolean;
  tryOutHome?: boolean;
  previewEven?: boolean
}


const CardTO = ({ ujian, tryOutHome, previewEven }: CardTOProps) => {
  const [isDaftar, setIsDaftar] = useState(true)
  const [isTime, setIsTime] = useState(true)

  if (ujian) {
    return (
      <div className={styles.pagesUjian}>
        <Card className={styles.card} bodyStyle={{ paddingTop: 24, paddingRight: 0, paddingBottom: 32, paddingLeft: 24, borderRadius: 24, }}>
          <div className={styles.header}>
            <div className={styles.wrapIcon}>
              {/* <LibraryBooksIcon className={styles.icon} fontSize="large" /> */}
              <img src="/assets/img/group-22.svg" alt="logo" />
            </div>
            {/* <div className={styles.wrapFree}>
              <h6>Free</h6>
            </div> */}
          </div>
          <div className={styles.title}>
            <h3>TO 4 - UTBK Soshum 2022</h3>
          </div>
          <div className={styles.descUjian}>
            <div className={styles.soalUjian}><h6>139 Soal</h6></div>
            <div className={styles.totalTimeUjian}><h6>139 Menit</h6></div>
          </div>
          <div className={styles.timeUjian}>
            <div className={styles.daftarUjian}>
              <h6><span>Daftar:</span> 12 Oct, 00:00 - 24 Oct 2021, 18:00</h6>
            </div>
            <div className={styles.ujianUjian}>
              <h6><span>Ujian:</span> 12 Oct, 00:00 - 24 Oct 2021, 18:00</h6>
            </div>
          </div>
          {/* <div className={styles.countdown}>
            <div className={styles.timer}>
              <span>06:</span>
              <span>14:</span>
              <span>10:</span>
              <span>10</span>
            </div>
          </div> */}
          <div className={styles.footer}>
            <div className={styles.preview}>
              <Button type="primary" className={styles.btnPreview}><Link href="/auth/signup">Preview</Link></Button>

            </div>
            <div className={styles.dropdownUjian}>
              <Button type="primary" className={styles.btnDafatarTOUjian}><Link href="/auth/signup">Ikut Lagi</Link></Button>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  if (tryOutHome) {
    return (
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
          <div className={styles.timeTryOut}>
            <div><DateRangeTwoToneIcon /></div>
            <div className={styles.daftarTryOut}>
              <h6>12 Oct-24 Oct 2021, 23:59</h6>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.preview}>
              <Button type="primary" className={styles.btnPreview}><Link href="/auth/signup">Preview</Link></Button>

            </div>
            <div className={styles.dropdown}>
              {
                isDaftar ?
                  <>
                    {
                      isTime ? <> <Button type="primary" className={styles.btnDafatarTO}><Link href="/auth/signup">Kerjakan</Link></Button> </> : <> <Button type="primary" className={styles.btnIsDaftar}><Link href="/auth/signup">Belum Mulai</Link></Button> </>
                    }


                  </> :
                  <>
                    <Button type="primary" className={styles.btnDafatarTO}><Link href="/auth/signup">Daftar TO</Link></Button>
                  </>
              }


            </div>
          </div>
        </Card>
      </div>
    )
  }

  if (previewEven) {
    return (
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
          <div className={styles.descPreview}>
            <DateRangeTwoToneIcon />
            <div className={styles.soalPreview}><h6>139 Soal - 139 Menit</h6></div>
            {/* <div className={styles.totalTime}><h6></h6></div> */}
          </div>
          <div className={styles.timeTryOut}>
            {/* <div><DateRangeTwoToneIcon /></div>
            <div className={styles.daftarTryOut}>
              <h6>12 Oct-24 Oct 2021, 23:59</h6>
            </div> */}
          </div>
          <div className={styles.footer}>
            <div className={styles.preview}>
              <Button type="primary" className={styles.btnPreview}><Link href="/events/21">Preview</Link></Button>

            </div>
            <div className={styles.dropdown}>
              {
                isDaftar ?
                  <>
                    {
                      isTime ? <><Button type="primary" className={styles.btnDafatarTO}><Link href="/events/detail_events">Kerjakan</Link></Button></> : <><Button type="primary" className={styles.btnIsDaftar}><Link href="/auth/signup">Belum Mulai</Link></Button></>
                    }


                  </> :
                  <>

                  </>
              }


            </div>
          </div>
        </Card>
      </div>
    )
  }

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
          {
            !isTime ?
              <>
                <div className={styles.timer}>
                  <span>06:</span>
                  <span>14:</span>
                  <span>10:</span>
                  <span>10</span>
                </div>
              </> :
              <>
              </>
          }

        </div>
        <div className={styles.footer}>
          <div className={styles.preview}>
            <Button type="primary" className={styles.btnPreview}><Link href="/main_events/3">Preview</Link></Button>

          </div>
          <div className={styles.dropdown}>
            {
              isDaftar ?
                <>
                  {
                    isTime ?
                      <>
                        <Button type="primary" className={styles.btnDafatarTO}><Link href="/auth/signup">Kerjakan</Link></Button>
                      </> :
                      <>
                        <Button type="primary" className={styles.btnIsDaftar}><Link href="/auth/signup">Belum Mulai</Link></Button>
                      </>
                  }

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
