import 'antd/dist/antd.css';
import Link from 'next/link';

import { Breadcrumb, Dropdown, Button, Menu, Card } from 'antd';
import styles from '../../../styles/Simulation.module.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CardBlog from '../../../components/molecuels/CardBlog';
import CategoryBlog from '../../../components/atoms/CategoryBlog';
import { Tabs } from 'antd';
import CardTO from '../../../components/molecuels/CardTO';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

import CardRaport from '../../../components/molecuels/CardRaport';
import CustomLayout from '../../../components/molecuels/Layout';
import TableResultSimulation from '../../../components/atoms/TableResultSimulation';



const menu = (
  <Menu className={styles.menuUtama}>
    <Menu.Item title="Belajar">
      {/* <Button type="primary" className={styles.subMenu}>Ikut Lagi </Button> */}
      <span>TKA SAINTEK</span>
    </Menu.Item>
    <Menu.Item>
      <span>TPS</span>
      {/* <Button type="primary" className={styles.subMenu}>Ikut Lagi </Button> */}
    </Menu.Item>

  </Menu>
);


const data = [
  {
    name: 'TO 1',
    nilai: 100,

  },
];





const Simulation = () => {

  const { TabPane } = Tabs;

  const callback = (key: any) => {
    console.log(key);
  }


  return (
    <CustomLayout>
      <div className={styles.pages}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link href="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href="/raports">Rapots</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href="/raports/simulation/">Simulation</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className={styles.container}>
          <div className={styles.filter}>
            {/* <div>
              <h5>My Event</h5>
            </div>
            <div>
              <h5>My Traning</h5>
            </div> */}
            <Tabs defaultActiveKey="1" onChange={callback} size="large" className={styles.tabBarStyle}>
              <TabPane tab="Passing Grade" key="1" className={styles.tabEvent}>
                <div className={styles.content}>
                  <div className={styles.alert}>
                  </div>
                  <div className={styles.contentCard}>
                    <Card className={styles.contentCardAnt}>
                      <div className={styles.top}>
                        <span>Nilai (dalam %)</span>
                        <Dropdown overlay={menu} trigger={['click']}>
                          <Button type="primary" className={styles.btnDropDown} onClick={e => e.preventDefault()}>All</Button>
                        </Dropdown>
                      </div>
                      <div className={styles.chart}>
                        <ResponsiveContainer width="99%" height={400}>
                          <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                              top: 5,
                              right: 30,
                              left: 20,
                              bottom: 5,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="nilai" fill="#a5a7a8" barSize={20} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </Card>
                    <div className={styles.table}>
                      <div className={styles.keterangan}>
                        <h3>Keterangan</h3>
                        <div className={styles.colorText}>
                          <ul>
                            <li><span className={styles.hijau}>Hijau = </span>Lulus Pilihan 1</li>
                            <li><span className={styles.orange}>Oranye = </span>Lulus Pilihan 2</li>
                            <li><span className={styles.merah}>Merah = </span>Lulus Pilihan 3</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className={styles.result}>
                      <TableResultSimulation />
                      <TableResultSimulation />
                    </div>
                    <div className={styles.catatan}>
                      <span>Catatan :</span>
                      Simulasi ini dibuat berdasarkan data passing grade kampus yang termasuk dalam 'Top 500'.
                    </div>
                    <div className={styles.btn}>
                      <Button type="primary">Edit pilihan Program</Button>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Rasionalisasi" key="2">
                <div className={styles.content}>
                  <div className={styles.alert}>
                  </div>
                  <div className={styles.contentCard}>
                    <Card className={styles.contentCardAnt}>
                      <div className={styles.top}>
                        <span>Nilai (dalam %)</span>
                        <Dropdown overlay={menu} trigger={['click']}>
                          <Button type="primary" className={styles.btnDropDown} onClick={e => e.preventDefault()}>All</Button>
                        </Dropdown>
                      </div>
                      <div className={styles.chart}>
                        <ResponsiveContainer width="99%" height={400}>
                          <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                              top: 5,
                              right: 30,
                              left: 20,
                              bottom: 5,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="nilai" fill="#a5a7a8" barSize={20} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </Card>
                    <div className={styles.table}>
                      <div className={styles.keterangan}>
                        <h3>Keterangan</h3>
                        <div className={styles.colorText}>
                          <ul>
                            <li><span className={styles.hijau}>Hijau = </span>Lulus Pilihan 1</li>
                            <li><span className={styles.orange}>Oranye = </span>Lulus Pilihan 2</li>
                            <li><span className={styles.merah}>Merah = </span>Lulus Pilihan 3</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className={styles.result}>
                      <TableResultSimulation />
                      <TableResultSimulation />
                    </div>
                    <div className={styles.catatan}>
                      <span>Catatan :</span>
                      Simulasi ini dibuat berdasarkan perbandingan jumlah peminat dan daya tampung dengan pendekatan "worst case scenario" (skenario terburuk) dimana seluruh peserta dalam TO ini memilih jurusan yang sama dengan Anda.
                    </div>
                    <div className={styles.btn}>
                      <Button type="primary">Edit pilihan Program</Button>
                    </div>
                  </div>
                </div>
              </TabPane>
            </Tabs>
          </div>

        </div>
      </div>
    </CustomLayout >
  )
}

export default Simulation
