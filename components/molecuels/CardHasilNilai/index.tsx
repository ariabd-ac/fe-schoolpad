import { Modal } from 'antd'
import styles from './CardHasilNilai.module.scss'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const CardHasilNilai = () => {

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
              <span>Nilai Kamu</span>
              <span className={styles.nilaiBlue}>500.0</span>
            </div>
            <div className={styles.nilai}>
              <span>Nilai Maksimum</span>
              <span className={styles.nilaiBold}>760.0</span>
            </div>
            <div className={styles.nilai}>
              <span>Nilai Tertinggi</span>
              <span className={styles.nilaiBold}>375.24</span>
            </div>
          </div>
          <div className={styles.splitRight}>
            <div className={styles.nilai}>
              <span>Nilai Rata-rata</span>
              <span className={styles.nilaiBold}>375.24</span>
            </div>
            <div className={styles.nilai}>
              <span>Nilai (dalam %)</span>
              <span className={styles.nilaiBold}>65</span>
            </div>
            <div className={styles.nilai}>
              <span>Ranking</span>
              <span className={styles.nilaiBold}>75</span>
            </div>
          </div>
        </div>
      }

      {/* modals */}
      <Modal
        title="PPU"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={700}
        bodyStyle={{ height: 'auto' }} >
        <div className={styles.tableModals}>
          <table className={styles.tableData}>
            <thead>
              <tr>
                <th>Nomor Soal</th>
                <th>Status Jawaban</th>
                <th className={styles.textRight}>% menjawab benar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  1
                </td>
                <td className={styles.textSuccess}>Benar</td>
                <td className={styles.textRight}>82.11%</td>
              </tr>
              <tr>
                <td>
                  2
                </td>
                <td className={styles.textSuccess}>Benar</td>
                <td className={styles.textRight}>61.47%</td>
              </tr>
              <tr>
                <td>
                  3
                </td>
                <td className={styles.textDanger}>Salah</td>
                <td className={styles.textRight}>3.67%</td>
              </tr>
              <tr>
                <td>
                  4
                </td>
                <td className={styles.textSuccess}>Benar</td>
                <td className={styles.textRight}>90.37%</td>
              </tr>
              <tr>
                <td>
                  5
                </td>
                <td className={styles.textSuccess}>Benar</td>
                <td className={styles.textRight}>41.74%</td>
              </tr>
              <tr>
                <td>
                  6
                </td>
                <td className={styles.textSuccess}>Benar</td>
                <td className={styles.textRight}>56.88%</td>
              </tr>
              <tr>
                <td>
                  7
                </td>
                <td className={styles.textSuccess}>Benar</td>
                <td className={styles.textRight}>74.31%</td>
              </tr>
              <tr>
                <td>
                  8
                </td>
                <td className={styles.textDanger}>Salah</td>
                <td className={styles.textRight}>75.69%</td>
              </tr>
              <tr>
                <td>
                  9
                </td>
                <td className={styles.textSuccess}>Benar</td>
                <td className={styles.textRight}>38.53%</td>
              </tr>
              <tr>
                <td>
                  10
                </td>
                <td className={styles.textDanger}>Salah</td>
                <td className={styles.textRight}>9.63%</td>
              </tr>
              <tr>
                <td>
                  11
                </td>
                <td className={styles.textSuccess}>Benar</td>
                <td className={styles.textRight}>76.15%</td>
              </tr>
              <tr>
                <td>
                  12
                </td>
                <td className={styles.textDanger}>Salah</td>
                <td className={styles.textRight}>49.08%</td>
              </tr>
              <tr>
                <td>
                  13
                </td>
                <td className={styles.textSuccess}>Benar</td>
                <td className={styles.textRight}>66.51%</td>
              </tr>
              <tr>
                <td>
                  14
                </td>
                <td className={styles.textDanger}>Salah</td>
                <td className={styles.textRight}>33.94%</td>
              </tr>
              <tr>
                <td>
                  15
                </td>
                <td className={styles.textSuccess}>Benar</td>
                <td className={styles.textRight}>71.56%</td>
              </tr>
              <tr>
                <td>
                  16
                </td>
                <td className={styles.textSuccess}>Benar</td>
                <td className={styles.textRight}>43.12%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal>
    </div>
  )
}

export default CardHasilNilai
