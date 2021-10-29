import { ReactNode, useEffect, useState } from 'react';
import { Layout } from 'antd';
import styles from '../../../styles/Layout.module.scss'
import Image from 'next/image'
import { Button, Menu, Dropdown } from 'antd'
import Head from 'next/head'
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SettingsIcon from '@mui/icons-material/Settings';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import SchoolIcon from '@mui/icons-material/School';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import TimelineIcon from '@mui/icons-material/Timeline';
import { useRouter } from 'next/router';


const { Header, Footer, Sider, Content } = Layout;

interface CustomLayoutProps {
  children: ReactNode;
}

function CustomLayout(props: CustomLayoutProps) {
  const { children } = props

  const [navbarOpen, setNavbarOpen] = useState(false)
  const [isLogin, setLogin] = useState(true)
  const [isPrem, setIsPrem] = useState(true)

  const route = useRouter();

  useEffect(() => {
    console.log("router", route);
  }, [])

  const logout = () => {
    setLogin(false)
  }

  const menu = (
    <Menu className={styles.menuDropDown}>
      {
        !isPrem &&
        <Menu.Item key="0">
          <div className={styles.subMenuDropDown}>
            <ArrowUpwardIcon className={styles.menuIconTop} /> <h6>Upgrade Prime</h6>
          </div>
        </Menu.Item>
      }

      <Menu.Item key="1">
        <Link href="/diagnostik">
          <div className={styles.subMenuDropDown}>
            <MenuBookIcon className={styles.menuIcon} /> <span>Test Diagnostik</span>
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link href="/auth/edit">
          <div className={styles.subMenuDropDown}>
            <SettingsIcon className={styles.menuIcon} /> <span>Profile</span>
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link href="/orders">
          <div className={styles.subMenuDropDown}>
            <HistoryIcon className={styles.menuIcon} /> <span>Riwayat Transaksi</span>
          </div>
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="4" onClick={logout}>
        <div className={styles.subMenuDropDown}>
          <LogoutIcon className={styles.menuIconBot} /> <span>Logout</span>
        </div>
      </Menu.Item>
    </Menu>
  );

  const togleMenu = () => {
    setNavbarOpen(!navbarOpen)
  }
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <Header className={styles.header}>

        {
          isLogin ?
            <>
              <div className={styles.logo}>
                <div className={styles.wrapLogo}>
                  <Link href="/">
                    {/* <Image src="https://schoolpad.id/assets/logo_blue-5b76672c43cee4486d7c1319fbbe17f7c6853c9efdc4490c2b8561af79e74a99.svg" alt="logo" width={162} height={32}></Image> */}
                    <img src="https://schoolpad.id/assets/logo_blue-5b76672c43cee4486d7c1319fbbe17f7c6853c9efdc4490c2b8561af79e74a99.svg" alt="logo" className={styles.schoolpad} />
                  </Link>
                </div>
              </div>
              <div className={styles.contentButtonLogin}>
                <div className={styles.wraperButton}>
                  <Link href="/schoolpad">
                    <Button type="primary" className={styles.buttonMasukLogin}>
                      <div className={styles.buttonImg}>
                        <SchoolIcon />
                      </div>
                      <span>Schoolpad</span>
                    </Button>
                  </Link>
                  <Link href="/main_events">
                    <Button type="primary" className={styles.buttonMasukLogin}>
                      <div className={styles.buttonImg}>
                        <CollectionsBookmarkIcon />
                      </div>
                      <span>Try Out</span>
                    </Button>
                  </Link>
                  <Link href="/packages">
                    <Button type="primary" className={styles.buttonMasukLogin}>
                      <div className={styles.buttonImg}>
                        <LibraryBooksOutlinedIcon />
                      </div>
                      <span>Produk</span>
                    </Button>
                  </Link>
                  <Link href="/blog">
                    <Button type="primary" className={styles.buttonMasukLogin}>
                      <div className={styles.buttonImg}>
                        <BackupTableIcon className={styles.btnIcon} />
                      </div>
                      <span>Blog</span>
                    </Button>
                  </Link>
                  <Link href="/raports">
                    <Button type="primary" className={styles.buttonMasukLogin}>
                      <div className={styles.buttonImg}>
                        <TimelineIcon />
                      </div>
                      <span>Rapport</span>
                    </Button>
                  </Link>
                </div>

              </div>
              <div className={styles.menuProfile}>
                <div className={styles.nameAndIcon}>
                  <span>Hi, Dinda </span>
                  <div className={styles.iconMenu} onClick={e => e.preventDefault()}>
                    <Dropdown overlay={menu} trigger={['click']}>
                      <img src="/assets/img/arrowDown.svg" alt="arrowdown" />
                    </Dropdown>
                  </div>
                </div>
                {
                  isPrem &&
                  <div className={styles.iconPrem}>
                    <img src="/assets/icon/vip-royal.svg" alt="prem" />
                    <span>Prime</span>
                  </div>
                }

              </div>
            </>
            :
            <>
              <div className={styles.logo}>
                <div className={styles.wrapLogo}>
                  <Link href="/">
                    <img src="/assets/icon/logo_blue.svg" alt="logo" className={styles.schoolpad} />
                  </Link>
                </div>
              </div>
              <div className={styles.barMenu} onClick={togleMenu}>
                <MenuIcon fontSize="large" color="primary" />
              </div>
              <div className={styles.contentButton}>
                <Button type="primary" className={styles.buttonMasuk}><Link href="/auth/signin">Masuk</Link></Button>
                <Button type="primary" className={styles.buttonRegister}><Link href="/auth/signup">Register</Link></Button>
              </div>
              {navbarOpen && (
                <div className={styles.navMenu}>
                  <li className="">
                    <Link href="signup">
                      Register
                    </Link>
                  </li>
                  <li className="">
                    <Link href="signin">
                      Masuk
                    </Link>
                  </li>
                </div>
              )}
            </>
        }

      </Header>
      <Content className={styles.content}>
        <div className={styles.footerMenu}>
          <div className={styles.containerMenuFooter}>
            <div className={styles.wrapFooter}>
              <SchoolIcon className={styles.iconMenuFooter} />
              Schoolpad
            </div>
            <div className={styles.wrapFooter}>
              <CollectionsBookmarkIcon className={styles.iconMenuFooter} />
              Try Out
            </div>
            <div className={styles.wrapFooter}>
              <LibraryBooksOutlinedIcon className={styles.iconMenuFooter} />
              Porduk
            </div>
            <div className={styles.wrapFooter}>
              <BackupTableIcon className={styles.iconMenuFooter} />
              Blog
            </div>
            <div className={styles.wrapFooter}>
              <TimelineIcon className={styles.iconMenuFooter} />
              Rapport
            </div>
          </div>
        </div>
        {children}
      </Content>
      <Footer className={styles.footer}>
        <div className={styles.footerHeader}>
          <div className={styles.logo2}>
            <img src="/assets/img/logo2.png" alt="logo2" />
          </div>
          <div className={styles.contactUs}>
            <div className={styles.textHubungi}>
              <h5>Hubungi kami</h5>
            </div>
            <div className={styles.socialMedia}>
              <img src="/assets/img/messaging-whatsapp.svg" alt="logo2" className={styles.whatsapp} />
              <img src="/assets/img/social-instagram-1.svg" alt="logo2" />
            </div>
          </div>
        </div>
        <div className={styles.hr}></div>
        <div className={styles.copyRight}>
          <h5>
            © Copyright Schoolpad All Rights Reserved.
          </h5>
        </div>
      </Footer>
    </>
  )
}

export default CustomLayout
