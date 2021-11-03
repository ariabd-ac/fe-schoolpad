
import 'antd/dist/antd.css';
import Link from 'next/link';
import CustomLayout from '../../components/molecuels/Layout';
import { Breadcrumb, Dropdown, Button, Menu, Pagination, Table, Modal, Radio, Space, Card, Divider } from 'antd';
import styles from '../../styles/PackageTrials.module.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CardBlog from '../../components/molecuels/CardBlog';
import CardPackage from '../../components/molecuels/CardPackage';
import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { fontSize, height, width } from '@mui/system';




const LihatPackgaes = () => {
  const [isPrem, setIsPrem] = useState(true);

  // const theme = useTheme();
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const showNilaiHasil = () => {
    setVisible(true);
  }

  const close = () => {
    setVisible(false);
  }

  const columns = [
    {
      title: 'Sesi',
      dataIndex: 'sesi',
      key: 'sesi',
      render: (text: any) => <a onClick={showNilaiHasil}>{text}</a>,
    },
    {
      title: 'Nilai Anda',
      dataIndex: 'nilai',
      key: 'nilai',

    },
  ];

  const data = [
    {
      key: 0,
      sesi: 'BAB 1. Persamaan dan Pertidaksamaan Linear Nilai Mutlak (Persamaan Nilai Mutlak)',
      nilai: 2301.21,
    },

  ];

  const columnsStatistik = [
    {
      title: 'Rank',
      dataIndex: 'rank',
      key: 'rank',
    },
    {
      title: 'Secore',
      dataIndex: 'secore',
      key: 'secore',

    },
  ];

  const dataStatistik = [
    {
      key: 0,
      rank: 1,
      secore: 2301.21,
    },

  ];

  return (
    <CustomLayout>
      <div className={styles.pages}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link href="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href="/packages">Paket</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href="/packages">Pos Test BAB 1. Persamaan dan Pertidaksamaan Linear Nilai Mutlak</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href="/packages">Detail</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className={styles.container}>
          <div className={styles.title} style={{ marginBottom: 32 }}>
            <h6>Pos Test BAB 1. Persamaan dan Pertidaksamaan Linear Nilai Mutlak</h6>
          </div>
          <div className={styles.content}>
            <Tabs style={{ width: '100%' }}>
              <TabList style={{ display: 'flex' }}>
                <Tab style={{ flex: 1, textAlign: 'center', paddingTop: 15, paddingBottom: 15, }} className={styles.tabCustomize}>Analisa</Tab>
                <Tab style={{ flex: 1, textAlign: 'center', paddingTop: 15, paddingBottom: 15, }} className={styles.tabCustomize}>Solusi</Tab>
                <Tab style={{ flex: 1, textAlign: 'center', paddingTop: 15, paddingBottom: 15, }} className={styles.tabCustomize}>Simulasi</Tab>
              </TabList>
              <TabPanel className={styles.containerTab}>
                <div className={styles.tabPancel1}>
                  <span>Statistik</span>
                  <div className={styles.table}>
                    <Table columns={columnsStatistik} dataSource={dataStatistik} pagination={false} />
                  </div>
                </div>
                <div className={styles.tabPancel1}>
                  <span>Sekor Mata Pelajaran</span>
                  <div className={styles.table}>
                    <Table columns={columns} dataSource={data} pagination={false} />
                  </div>
                </div>
              </TabPanel>
              <TabPanel className={styles.containerTab2}>
                {/* <div className={styles.tabPancel2}> */}
                <div className={styles.cardWrapper}>
                  <Card bordered={true} className={styles.cardTab} >
                    <div className={styles.wraperContent}>
                      <div className={styles.cardTitle}>
                        <h6>BAB 1. Persamaan dan Pertidaksamaan Linear Nilai Mutlak (Persamaan Nilai Mutlak)</h6>
                      </div>
                      <Divider />
                      <div className={styles.contentTab2}>
                        <Button className={styles.buttonTab2} type="primary" size="small" >Lihat Solusi</Button>
                      </div>
                    </div>
                  </Card>
                  <Card bordered={true} className={styles.cardTab} >
                    <div className={styles.wraperContent}>
                      <div className={styles.cardTitle}>
                        <h6>BAB 1. Persamaan dan Pertidaksamaan Linear Nilai Mutlak (Persamaan Nilai Mutlak)</h6>
                      </div>
                      <Divider />
                      <div className={styles.contentTab2}>
                        <Button className={styles.buttonTab2} type="primary" size="small" >Lihat Solusi</Button>
                      </div>
                    </div>
                  </Card>
                  <Card bordered={true} className={styles.cardTab} >
                    <div className={styles.wraperContent}>
                      <div className={styles.cardTitle}>
                        <h6>BAB 1. Persamaan dan Pertidaksamaan Linear Nilai Mutlak (Persamaan Nilai Mutlak)</h6>
                      </div>
                      <Divider />
                      <div className={styles.contentTab2}>
                        <Button className={styles.buttonTab2} type="primary" size="small" >Lihat Solusi</Button>
                      </div>
                    </div>
                  </Card>
                  <Card bordered={true} className={styles.cardTab} >
                    <div className={styles.wraperContent}>
                      <div className={styles.cardTitle}>
                        <h6>BAB 1. Persamaan dan Pertidaksamaan Linear Nilai Mutlak (Persamaan Nilai Mutlak)</h6>
                      </div>
                      <Divider />
                      <div className={styles.contentTab2}>
                        <Button className={styles.buttonTab2} type="primary" size="small" >Lihat Solusi</Button>
                      </div>
                    </div>
                  </Card>
                </div>
                {/* </div> */}
              </TabPanel>
              <TabPanel className={styles.containerTab3}>
                <div className={styles.head}>
                  <span>Statistik</span>
                  <div className={styles.tableStatistik}>
                    <table>
                      <tbody>
                        <tr>
                          <td>Ranking anda</td>
                          <td>20</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className={styles.content}>
                  <span>Pilih Program Studi</span>
                  <div className={styles.tablePlihProgStudi}>
                    <table>
                      <thead>
                        <tr>
                          <th colSpan={6}>TEKNIK MESIN - UNIVERSITAS BANGKA BELITUNG</th>
                        </tr>
                        <tr>
                          <td>
                            <b>Tahun</b>
                          </td>
                          <td className="text-right">
                            <b>2015</b>
                          </td>
                          <td className="text-right">
                            <b>2016</b>
                          </td>
                          <td className="text-right">
                            <b>2017</b>
                          </td>
                          <td className="text-right">
                            <b>2018</b>
                          </td>
                          <td className="text-right">
                            <b>2019</b>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-nowrap">Jumlah Peminat</td>
                          <td className="text-right" >152</td>
                          <td className="text-right" >136</td>
                          <td className="text-right">160</td>
                          <td className="text-right">129</td>
                          <td className="text-right">46</td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">Daya Tampung</td>
                          <td className="text-right">35</td>
                          <td className="text-right" >25</td>
                          <td className="text-right">36</td>
                          <td className="text-right">18</td>
                          <td className="text-right">17</td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">Rasio Penerimaan</td>
                          <td className="text-right text-nowrap">
                            23.03
                            %
                          </td>
                          <td className="text-right text-nowrap">
                            18.38
                            %
                          </td>
                          <td className="text-right text-nowrap">
                            22.5
                            %
                          </td>
                          <td className="text-right text-nowrap">
                            13.95
                            %
                          </td>
                          <td className="text-right text-nowrap">
                            36.96
                            %
                          </td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            Rangking Minimal
                            TKA Saintek 19 - UTBK 2021
                          </td>
                          <td className="text-right">
                            21
                          </td>
                          <td className="text-right">
                            17
                          </td>
                          <td className="text-right">
                            21
                          </td>
                          <td className="text-right">
                            13
                          </td>
                          <td className="text-right" >
                            35
                          </td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">Hasil</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className={styles.tablePlihProgStudi}>
                    <table>
                      <thead>
                        <tr>
                          <th colSpan={6}>TEKNIK MESIN - UNIVERSITAS BANGKA BELITUNG</th>
                        </tr>
                        <tr>
                          <td>
                            <b>Tahun</b>
                          </td>
                          <td className="text-right">
                            <b>2015</b>
                          </td>
                          <td className="text-right">
                            <b>2016</b>
                          </td>
                          <td className="text-right">
                            <b>2017</b>
                          </td>
                          <td className="text-right">
                            <b>2018</b>
                          </td>
                          <td className="text-right">
                            <b>2019</b>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-nowrap">Jumlah Peminat</td>
                          <td className="text-right" >152</td>
                          <td className="text-right" >136</td>
                          <td className="text-right">160</td>
                          <td className="text-right">129</td>
                          <td className="text-right">46</td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">Daya Tampung</td>
                          <td className="text-right">35</td>
                          <td className="text-right" >25</td>
                          <td className="text-right">36</td>
                          <td className="text-right">18</td>
                          <td className="text-right">17</td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">Rasio Penerimaan</td>
                          <td className="text-right text-nowrap">
                            23.03
                            %
                          </td>
                          <td className="text-right text-nowrap">
                            18.38
                            %
                          </td>
                          <td className="text-right text-nowrap">
                            22.5
                            %
                          </td>
                          <td className="text-right text-nowrap">
                            13.95
                            %
                          </td>
                          <td className="text-right text-nowrap">
                            36.96
                            %
                          </td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            Rangking Minimal
                            TKA Saintek 19 - UTBK 2021
                          </td>
                          <td className="text-right">
                            21
                          </td>
                          <td className="text-right">
                            17
                          </td>
                          <td className="text-right">
                            21
                          </td>
                          <td className="text-right">
                            13
                          </td>
                          <td className="text-right" >
                            35
                          </td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">Hasil</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className={styles.footer}>
                  <span><span style={{ fontWeight: 'bold' }}>Catatan:</span> Simulasi ini dibuat berdasarkan perbandingan jumlah peminat dan daya tampung dengan pendekatan "worst case scenario" (skenario terburuk) dimana seluruh peserta dalam TO ini memilih jurusan yang sama dengan Anda.</span>
                  <div className={styles.btnEdit}>
                    <Button size="small" type="primary" style={{ backgroundColor: '#02bc77', border: 'none', color: '#fff', borderRadius: 4 }}><span>Edit Pilihan Program</span></Button>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
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
                    halo
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
              halo
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

export default LihatPackgaes
