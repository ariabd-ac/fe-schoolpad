

import { Breadcrumb, Button, Modal, Radio, Input, Space, InputNumber } from 'antd';
import 'antd/dist/antd.css';
import Link from 'next/link';
import CustomLayout from '../../components/molecuels/Layout';
import styles from '../../styles/RiwayatTransaksi.module.scss';
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';





const RiwayatTransaksi = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(1);

  const MySwal = withReactContent(Swal)


  const showLinkActive = () => {
    MySwal.fire({
      icon: 'info',
      title: 'Success',
      html:
        'Link aktivasi berhasil dicopy. Silahkan catat dan kirimkan ke teman anda.' + '<br />' +
        'Link :' + '<br />' +
        '<div style="overflow-x: scroll;color: red;" className="modals-show-code">https://schoolpad.id/orders</div>',
      // footer: '<div>Why do I have this issue?</div>'
    })
  }

  const goPayment = () => {
    setVisible(true);
  }
  const close = () => {
    setVisible(false);
  }


  const router = useRouter()



  const onChange = (e: any) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const onCounter = (values: any) => {
    console.log('changed', values);
  }


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
                        <Button className={styles.goToPayment} onClick={goPayment} type="link">Lanjut ke pembayaran</Button>
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
                        <Button className={styles.goToPayment} type="link" onClick={showLinkActive}>Copy Link Aktivasi</Button>
                      </td>
                      <td>Belum aktif</td>
                      <td>February 04, 2021</td>
                      <td>
                        -
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Button className={styles.goToPayment} type="link" onClick={showLinkActive}>Copy Link Aktivasi</Button>
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
        {/* modals */}
        <Modal
          title=""
          centered
          visible={visible}
          onCancel={close}
          footer={null}
          width={600}
          bodyStyle={{ height: 'auto' }} >
          <div className={styles.modals}>
            <div className={styles.title}>
              <div className={styles.text}>
                Bayar sekali <span>untuk</span> semua TO dan fitur Schoolpad <span>selama</span> UTBK 2022.
              </div>
            </div>
            <div className={styles.bodyPayment}>
              <div className={styles.counter}>
                <span>Jumlah</span>
                <div className={styles.counterPrice}>
                  <div className={styles.wrapper}>
                    <Button type="primary" className={styles.remove}><RemoveIcon /></Button>
                    <InputNumber className={styles.inputPrice} size="small" min={1} max={100000} defaultValue={1} onChange={onCounter} />
                    <Button type="primary" className={styles.add}><AddIcon /></Button>
                  </div>
                </div>
              </div>
              <div className={styles.price}>
                <span>Harga</span>
                <div className={styles.pricePayment}>
                  <div className={styles.discount}>
                    <span>Rp 250.000</span>
                  </div>
                  <span>Rp 150.000</span>
                </div>
              </div>
              <hr />
              <div className={styles.total}>
                <span>Total</span>
                <h4>Rp 150.000</h4>
              </div>
            </div>
            <div className={styles.footerPayment}>
              <span>Metode Pembayaran</span>
              <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical">
                  <Radio value={1}><span style={{ fontFamily: 'Montserrat', fontSize: 14, fontWeight: 700, color: '#4E5155' }}>Gopay</span></Radio>
                  <Radio value={2}><span style={{ fontFamily: 'Montserrat', fontSize: 14, fontWeight: 700, color: '#4E5155' }}>OVO/Dana/Jenius/ShopeePay</span></Radio>
                  <Radio value={3}><span style={{ fontFamily: 'Montserrat', fontSize: 14, fontWeight: 700, color: '#4E5155' }}>Alfamart</span></Radio>
                  <Radio value={4}><span style={{ fontFamily: 'Montserrat', fontSize: 14, fontWeight: 700, color: '#4E5155' }}>Alfamidi</span></Radio>
                  <Radio value={5}><span style={{ fontFamily: 'Montserrat', fontSize: 14, fontWeight: 700, color: '#4E5155' }}>Transfer Bank</span></Radio>
                </Space>
              </Radio.Group>
            </div>
            <div className={styles.buttonPayment}>
              <Button type="primary" className={styles.pay}>Lanjut Ke Pembayaran</Button>
            </div>
          </div>
        </Modal>
      </div>
    </CustomLayout >
  )
}

export default RiwayatTransaksi

