import { Breadcrumb, Button, Input, Dropdown, Menu, Tabs, Pagination, Table, Card } from 'antd';
import 'antd/dist/antd.css';
import Link from 'next/link';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, PieChart, Pie, Sector, Cell, LabelList } from 'recharts';
import TableResultSimulation from '../../../components/atoms/TableResultSimulation';
import AlertInformationSoal from '../../../components/molecuels/AlertInformationSoal';
import CardDetailJawaban from '../../../components/molecuels/CardDetailJawaban';
import CardHasilNilai from '../../../components/molecuels/CardHasilNilai';
import CustomLayout from '../../../components/molecuels/Layout';
import styles from '../../../styles/DetailRaport.module.scss';
import { ColumnsType } from "antd/es/table";
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const { SubMenu } = Menu;

const data = [
  {
    name: 'Rudi',
    nilai: 505.02,
    nilai_tertinggi: 636.75,
    nilai_average: 200.52,
    nilai_max: 852.0,
    rank: 1,
    jumlah_peserta: 1000,
  },
  {
    name: 'Panda Khanif',
    nilai: 305.02,
    nilai_tertinggi: 336.75,
    nilai_average: 500.52,
    nilai_max: 552.0,
    rank: 4,
  },
];

const dataRank = [
  {
    jumlahPeserta: 679,
  }
]

const COLORS = ['#F9AE1B', '#3FA9F5', '#FFBB28', '#FF8042'];



function itemRender(current: any, type: any, originalElement: any) {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
}


interface User {
  key: number;
  rank: number;
  name: string;
  nilai: number;
  age: number;
  address: string;
  tags: Array<string>;
}




const dataBar = [
  {
    name: 'PPU',
    nilai_max: 100,
    percentille: 50,
  },
  {
    name: 'PBM',
    nilai_max: 100,
    percentille: 80,
  },
  {
    name: 'PU',
    nilai_max: 100,
    percentille: 100,
  },
  {
    name: 'BInggris',
    nilai_max: 100,
    percentille: 60,
  },
  {
    name: 'PK',
    nilai_max: 100,
    percentille: 80,
  },
];

const menu = (
  <Menu className={styles.menuUtama}>
    <Menu.Item title="Belajar">
      <span>UTBK 2022</span>
    </Menu.Item>
    <Menu.Item>
      <span>TPS</span>
    </Menu.Item>
    <Menu.Item>
      <span>TKA SAINTEK</span>
    </Menu.Item>
    <Menu.Item>
      <span>TKA SOSHUM</span>
    </Menu.Item>
    <SubMenu title="Pelajaran" popupClassName={styles.subMenu2} style={{ color: '#3fa9f5', textAlign: 'left' }}>
      <Menu.Item>
        <span>Matematika</span>
      </Menu.Item>
      <Menu.Item>
        <span>Bahasa Indonesia</span>
      </Menu.Item>
      <Menu.Item>
        <span>Bahasa Inggris</span>
      </Menu.Item>
      <Menu.Item>
        <span>Fisika</span>
      </Menu.Item>
      <Menu.Item>
        <span>Kimia</span>
      </Menu.Item>
      <Menu.Item>
        <span>Biologi</span>
      </Menu.Item>
      <Menu.Item>
        <span>Geografi</span>
      </Menu.Item>
    </SubMenu>
    {/* <Menu.Item>
      <Dropdown overlay={subMenu} placement="bottomRight" arrow>
        <Button type="primary" className={styles.subMenu}>Ikut Lagi </Button>
      </Dropdown>
    </Menu.Item> */}
  </Menu>
);



const DetailRaport = () => {
  const [isUser, setValueRank] = useState(140)

  const { TabPane } = Tabs;
  const { Search } = Input;

  const callback = (key: any) => {
    console.log(key);
  }

  const onSearch = (value: any) => console.log(value);

  const columns = [
    {
      title: 'Rank TO',
      dataIndex: 'rank',
      key: 'rank',
      className: 'column-raport-detail'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      className: 'column-raport-detail'
    },
    {
      title: 'Nilai',
      dataIndex: 'nilai',
      key: 'nilai',
      className: 'column-raport-detail nilai-right'
    },
  ];

  const dataTable = [
    {
      key: 0,
      rank: 1,
      name: "Jack",
      nilai: 2301.21,
    },
    {
      key: 0,
      rank: 1,
      name: "Jack",
      nilai: 2301.21,
    },
    {
      key: 0,
      rank: 1,
      name: "Jack",
      nilai: 2301.21,
    },
    {
      key: 0,
      rank: 1,
      name: "Jack",
      nilai: 2301.21,
    },
    {
      key: 0,
      rank: 1,
      name: "Jack",
      nilai: 2301.21,
    },
    {
      key: 0,
      rank: 1,
      name: "Jack",
      nilai: 2301.21,
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
            <Link href="/main_events">Raport</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href="/main_events/hasil_to/saintek">Detail Raport</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className={styles.container}>
          <h6>TO 4 - UTBK Saintek 2022</h6>
          <div className={styles.filter}>
            <Tabs defaultActiveKey="1" onChange={callback} size="large" className={styles.tabBarStyle}>
              <TabPane tab="Nilai" key="1" className={styles.tabEvent}>
                <div className={styles.content}>
                  <div className={styles.contentCard}>
                    <div className={styles.contentCardAnt}>
                      <div className={styles.top}>
                        <h6>TPS (Nilai: 405.02)</h6>
                      </div>
                      <div className={styles.chart}>
                        <ResponsiveContainer width="100%" height={250} >
                          <BarChart
                            width={600}
                            height={300}
                            data={dataBar}
                            barCategoryGap={0}
                            barSize={20}
                            margin={{
                              top: 5,
                              right: 30,
                              left: 20,
                              bottom: 30,
                            }}
                          >
                            <CartesianGrid />
                            <XAxis style={{ fontWeight: 'normal', fontSize: '14' }} dataKey="name" scale="point" padding={{ left: 30, right: 20 }} />
                            <YAxis style={{ fontWeight: 'normal', fontSize: '14' }} />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="percentille" barSize={10} stackId="a" fill="#f9ae1b" background={{ fill: '#a5a7a8' }} />
                            {/* <Bar dataKey="percentille" barSize={10} stackId="a" fill="#f9ae1b" />
                            <Bar dataKey="nilai_max" barSize={10} stackId="a" fill="#a5a7a8" /> */}
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    <div className={styles.result}>
                      <CardHasilNilai />
                      <CardHasilNilai />
                      <CardHasilNilai />
                      <CardHasilNilai />
                      <CardHasilNilai />
                    </div>
                    {/* ====== */}

                  </div>
                </div>
              </TabPane>
              <TabPane tab="Solusi" key="2">
                <div className={styles.content}>
                  <div className={styles.alert}>
                    <span>Pembahasan Soal</span>
                    <AlertInformationSoal />
                  </div>
                  <div className={styles.contentCard}>
                    <div className={styles.result}>
                      <CardDetailJawaban />
                      <CardDetailJawaban />
                      <CardDetailJawaban />
                      <CardDetailJawaban />
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Ranking" key="3">
                <div className={styles.content3}>
                  <h4>Statistik Ranking</h4>
                  <div className={styles.alertRanking}>
                    <div className={styles.containerPie}>
                      <Card style={{ borderRadius: '20px' }} className={styles.chartPie} bodyStyle={{ display: 'flex', paddingLeft: 10, paddingRight: 10, }}>
                        <div className={styles.detailRank}>
                          <div className={styles.wrapperRank}>
                            <span>Nilai Kamu</span>
                            <div className={styles.nilaiKamu}>405.02</div>
                          </div>
                          <div className={styles.wrapperRank}>
                            <span>Nilai Rata-Rata</span>
                            <span>200.52</span>
                          </div>
                          <div className={styles.wrapperRank}>
                            <span>Nilai Tertinggi</span>
                            <span>636.76</span>
                          </div>
                          <div className={styles.wrapperRank}>
                            <span>Nilai Maximum</span>
                            <div className={styles.nilaiMax}>852.0</div>
                          </div>
                        </div>
                        <div className={styles.chartPieWrapper}>
                          <ResponsiveContainer width="99%" height="99%" className="pie-ondol">
                            {/* <BarChart layout="vertical" width={10} height={10} data={data} style={{ marginLeft: 0 }}>
                          <Bar dataKey="jumlah_peserta" fill="#8884d8" >
                          </Bar>
                        </BarChart> */}
                            <PieChart className="pie-fixed">
                              <Pie
                                data={data}
                                innerRadius={35}
                                outerRadius={80}
                                dataKey="nilai"
                                fill="#8884d8"
                              >
                                {data.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                              </Pie>
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </Card>
                    </div>
                    <div className={styles.chartBar}>
                      <Card style={{ borderRadius: '20px' }} className={styles.chartPie} bodyStyle={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div className={styles.detailRank}>
                          <div className={styles.wrapperRank}>
                            <span>Nilai Rata-Rata</span>
                            <span className={styles.nilaiAverage}>200.52</span>
                          </div>
                          <div className={styles.wrapperRank}>
                            <span>Nilai Tertinggi</span>
                            <span className={styles.value}>636.76</span>
                          </div>
                        </div>
                        <div className={styles.chartPieWrapper}>
                          <div className={styles.barRanked}>
                            <div className={styles.wrapperTooltipJP}>
                              <span className={styles.tooltipValue}>548</span>
                            </div>
                            <div className={styles.wrapperTooltipRank}>
                              <span className={styles.tooltipValueRank}>1</span>
                            </div>
                          </div>
                          <div className={styles.textRanked}>
                            <span style={{ fontSize: 18, fontWeight: 700, color: '#4e5155' }}>548</span>
                            <span style={{ fontSize: 18, fontWeight: 700, color: '#4e5155' }}>1</span>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                  <div className={styles.contentCard}>
                    <div className={styles.btnDropDown}>
                      <div className={styles.rata2}>
                        <Dropdown overlay={menu} trigger={['click']}>
                          <Button type="primary" className={styles.btnRata2} onClick={e => e.preventDefault()}>Rata-rata <KeyboardArrowDownIcon fontSize='small' /></Button>
                        </Dropdown>
                      </div>
                      <div className={styles.progStudi}>
                        <Dropdown overlay={menu} trigger={['click']}>
                          <Button type="primary" className={styles.btnRata2} onClick={e => e.preventDefault()}>Pilihan Program Studi<KeyboardArrowDownIcon fontSize='small' /></Button>
                        </Dropdown>
                      </div>
                    </div>
                    <div className={styles.result}>
                      <Table<User> columns={columns} dataSource={dataTable} className="table-striped-rows">
                        {/* <Table.Column<User> key="rank" title="Rank TO" className="table-green" dataIndex="rank" width={200} />
                        <Table.Column<User> key="name" title="Name" className="table-green" dataIndex="name" />
                        <Table.Column<User> key="nilai" title="Nilai" className="table-green" dataIndex="nilai" align="right" width={200} /> */}

                      </Table>
                    </div>
                    {/* <div className={styles.btn}>
                      <Pagination total={500} itemRender={itemRender} />
                    </div> */}
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

export default DetailRaport
