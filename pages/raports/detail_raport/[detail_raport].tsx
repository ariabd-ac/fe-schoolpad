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
];

const dataRank = [
  {
    jumlahPeserta: 679,
  },
  {
    jumlahPeserta: 679,
  },
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
}


const columns: ColumnsType<User> = [
  {
    key: "name",
    title: "Name",
    dataIndex: "name"
  }
];

const dataTable: User[] = [
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



const DetailRaport = () => {

  const { TabPane } = Tabs;
  const { Search } = Input;

  const callback = (key: any) => {
    console.log(key);
  }

  const onSearch = (value: any) => console.log(value);

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
                      <Card className={styles.chartPie} bodyStyle={{ display: 'flex', }}>
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
                          <ResponsiveContainer width="100%" height="100%">
                            {/* <BarChart layout="vertical" width={10} height={10} data={data} style={{ marginLeft: 0 }}>
                          <Bar dataKey="jumlah_peserta" fill="#8884d8" >
                          </Bar>
                        </BarChart> */}
                            <PieChart style={{ backgroundColor: 'red' }} width={400} height={500}>
                              <Pie
                                data={data}
                                cx={120}
                                cy="50%"
                                innerRadius={50}
                                outerRadius={100}
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
                      <Card className={styles.chartPie} bodyStyle={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div className={styles.detailRank}>
                          <div className={styles.wrapperRank}>
                            <span>Nilai Rata-Rata</span>
                            <span>200.52</span>
                          </div>
                          <div className={styles.wrapperRank}>
                            <span>Nilai Tertinggi</span>
                            <span>636.76</span>
                          </div>
                        </div>
                        <div className={styles.chartPieWrapper}>
                          <ResponsiveContainer width="99%" height={143}>
                            <BarChart
                              style={{ backgroundColor: 'red' }}
                              layout="vertical"
                              width={500}
                              height={300}
                              barCategoryGap={0}
                              barSize={50}
                              margin={{
                                top: 0,
                                right: 0,
                                left: 0,
                                bottom: 0,
                              }}
                              data={data}>
                              <YAxis padding={{ top: 0, bottom: 0 }} hide={true} />
                              <Tooltip />
                              <Bar dataKey="jumlah_peserta" maxBarSize={100} background={{ fill: '#f9ae1b' }} fill="#f9ae1b" />
                              {/* <Bar dataKey="rank" maxBarSize={100} stackId="a" background={{ fill: '#f9ae1b' }} fill="#f9ae1b" /> */}
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </Card>
                    </div>
                  </div>
                  <div className={styles.contentCard}>
                    <BarChart
                      style={{ backgroundColor: 'red' }}
                      layout="vertical"
                      width={1000}
                      height={300}
                      barCategoryGap={10}
                      barSize={1}
                      margin={{
                        top: 60,
                        right: 0,
                        left: 0,
                        bottom: 0,
                      }}
                      data={dataRank}>
                      <XAxis dataKey="jumlahPeserta" scale="point" padding={{ left: 10, right: 10 }} />
                      <YAxis padding={{ top: 10 }} />
                      <Tooltip itemStyle={{ backgroundColor: '#f9ae1b' }} />
                      <Legend />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Bar maxBarSize={1000} dataKey="jumlahPeserta" stackId="a" background={{ fill: '#a5a7a8' }} barSize={1000} fill="#8884d8" />
                    </BarChart>
                    <div className={styles.result}>
                      <Table<User> dataSource={dataTable} className="table-striped-rows">
                        <Table.Column<User> key="rank" title="Rank TO" dataIndex="rank" width={200} />
                        <Table.Column<User> key="name" title="Name" dataIndex="name" />
                        <Table.Column<User> key="nilai" title="Nilai" dataIndex="nilai" align="right" width={200} />
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
