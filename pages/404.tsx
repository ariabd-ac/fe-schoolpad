import { Button } from 'antd';
import styles from '../styles/404.module.scss';
import 'antd/dist/antd.css';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useEffect } from 'react';
import { useRouter } from 'next/router'

const Custom404 = () => {

  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000);
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.customNotFound}>
        <div className={styles.notFound}>
          <div className={styles.left}>
            <div className={styles.text}>
              <h1>Whoops...</h1>
              <h3>Kami tidak menemukan halaman yang anda cari :(</h3>
            </div>
            <div className={styles.wrapperButton}>
              <Button className={styles.button}><KeyboardBackspaceIcon className={styles.iconButton} />Kembali</Button>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.wrapperPhoto}>
              <img src="/assets/img/mac.png" alt="mac" className={styles.photo} />
            </div>
            <div className={styles.text404}>
              <div className={styles.subText}>
                404
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Custom404
