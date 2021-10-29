import { Button, Modal } from 'antd'
import styles from './CardDetailJawaban.module.scss'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const CardDetailJawaban = () => {

  const MySwal = withReactContent(Swal)

  const [isActiveNilai, setActiveNilai] = useState(true)
  const [visible, setVisible] = useState(false);

  console.log(isActiveNilai)


  const showLinkActive = () => {
    setVisible(true)
  }

  const showOffNilai = () => {
    setActiveNilai(false)
    if (!isActiveNilai) {
      setActiveNilai(true)
    }
  }


  return (
    <div className={styles.cardNilai}>
      <div className={isActiveNilai ? 'cardNilaiIsActive' : 'cardNilaiInActive'} onClick={showOffNilai}>
        {/* <Button type="link">Pengetahuan dan pemahaman Umum</Button> */}
        <h5 onClick={showLinkActive}>Pengetahuan dan pemahaman Umum</h5>
        <div className={styles.icon}>
          {
            isActiveNilai ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
          }

        </div>
      </div>
      {
        isActiveNilai &&
        <div className={styles.hasilNilai}>
          <div className={styles.splitLeft}>
            <div className={styles.nilai}>
              <span>Jawaban Benar</span>
              <span className={styles.nilaiGreen}>500.0</span>
            </div>
            <div className={styles.nilai}>
              <span>Jawaban Salah</span>
              <span className={styles.nilaiRed}>760.0</span>
            </div>
          </div>
          <div className={styles.splitRight}>
            <div className={styles.nilai}>
              <span>Tidak Dijawab</span>
              <span className={styles.nilaiNormal}>375.24</span>
            </div>
            <div className={styles.nilai}>
              <span>Total Soal</span>
              <span className={styles.nilaiBold}>65</span>
            </div>

          </div>
        </div>
      }
      <div className={isActiveNilai ? styles.footer : styles.footerInActive}>
        <Button type="primary">Lihat Soal</Button>
      </div>
    </div>
  )
}

export default CardDetailJawaban
