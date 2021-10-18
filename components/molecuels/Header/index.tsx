import { Button } from 'antd'
import Link from 'next/link'
import styles from './Header.module.css'
import Image from 'next/image'

const Header = () => {
  return (
    <header className={styles.container}>
      <div>
        <Image src="/assets/img/logo.jpeg" alt="logo" width={162} height={32} />
      </div>
      <div className={styles.contentButton}>
        <Button type="primary" className={styles.buttonMasuk}>Masuk</Button>
        <Button type="primary" className={styles.buttonRegister}>Register</Button>
      </div>
    </header>
  )
}

export default Header
