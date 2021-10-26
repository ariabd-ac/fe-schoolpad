

import { Breadcrumb, Button } from 'antd';
import 'antd/dist/antd.css';
import Link from 'next/link';
import CustomLayout from '../../components/molecuels/Layout';
import styles from '../../styles/RiwayatTransaksi.module.scss';
import { useRouter } from 'next/router'



const RiwayatTransaksi = () => {

  const router = useRouter()

  return (
    <CustomLayout>
      <div className={styles.pages}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link href="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href="/orders">Riwayat Transaksi</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.history}>
              <div className={styles.head}>
                <h3>Riwayat Transaksi anda</h3>
                <Link href="#"><Button type="primary">Order Kode Prime</Button></Link>
              </div>
              <div className={styles.tableHistory}>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Total</th>
                      <th>Metode</th>
                      <th>Tanggal dibuat</th>
                      <th>Tanggal dibayar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Prime</td>
                      <td>Rp 50.000</td>
                      <td>GOPAY</td>
                      <td>February 04, 2021</td>
                      <td>
                        February 04, 2021
                      </td>
                    </tr>
                    <tr>
                      <td>Prime</td>
                      <td>Rp 50.000</td>
                      <td>QRIS</td>
                      <td>February 04, 2021</td>
                      <td>
                        February 04, 2021
                      </td>
                    </tr>
                    <tr>
                      <td>Prime</td>
                      <td>Rp 100.000</td>
                      <td>GOPAY</td>
                      <td>March 01, 2021</td>
                      <td>
                        <Button className={styles.goToPayment} onClick={() => router.push("/")} type="link">Lanjut ke pembayaran</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={styles.codePrime}>
              <div className={styles.head}>
                <h5>Kode Prime Anda</h5>
              </div>
              <div className={styles.tableCode}>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Tanggal dibuat</th>
                      <th>Tanggal diaktifkan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Siswa 1
                      </td>
                      <td>syaiful.sabril+siswa1@gmail.com</td>
                      <td>February 04, 2021</td>
                      <td>
                        February 04, 2021
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Syaiful test
                      </td>
                      <td>syaiful.sabril+test2@gmail.com</td>
                      <td>February 04, 2021</td>
                      <td>
                        February 04, 2021
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Button className={styles.goToPayment} type="link" onClick={() => router.push("/")}>Copy Link Aktivasi</Button>
                      </td>
                      <td>Belum aktif</td>
                      <td>February 04, 2021</td>
                      <td>
                        -
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Button className={styles.goToPayment} type="link" onClick={() => router.push("/")}>Copy Link Aktivasi</Button>
                      </td>
                      <td>Belum aktif</td>
                      <td>February 04, 2021</td>
                      <td>
                        -
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomLayout >
  )
}

export default RiwayatTransaksi

