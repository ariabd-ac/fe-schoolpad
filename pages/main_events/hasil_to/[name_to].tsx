import { Breadcrumb, Button, Input, Dropdown, Menu, Tabs, Pagination, Table } from 'antd';
import 'antd/dist/antd.css';
import Link from 'next/link';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import TableResultSimulation from '../../../components/atoms/TableResultSimulation';
import AlertInformationSoal from '../../../components/molecuels/AlertInformationSoal';
import CardDetailJawaban from '../../../components/molecuels/CardDetailJawaban';
import CardHasilNilai from '../../../components/molecuels/CardHasilNilai';
import CustomLayout from '../../../components/molecuels/Layout';
import styles from '../../../styles/HasilTODetail.module.scss';
import { ColumnsType } from "antd/es/table";


const data = [
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



const TryoutHasil = () => {

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
            <Link href="/main_events">Try Out</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href="/main_events/hasil_to/saintek">Detail Try Out</Link>
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
                            data={data}
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
                    <div className={styles.contentCardAnt}>
                      <div className={styles.top}>
                        <h6>TPS (Nilai: 405.02)</h6>
                      </div>
                      <div className={styles.chart}>
                        <ResponsiveContainer width="100%" height={250} >
                          <BarChart
                            width={600}
                            height={300}
                            data={data}
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
                            {/* <Legend  /> */}
                            <Bar fontSize={5} dataKey="percentille" barSize={10} stackId="a" fill="#f9ae1b" background={{ fill: '#a5a7a8' }} />
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
                    <h4>TPS 4 - UTBK 2022</h4>
                    <div className={styles.result}>
                      <CardDetailJawaban />
                      <CardDetailJawaban />
                      <CardDetailJawaban />
                      <CardDetailJawaban />
                    </div>
                    <h4>TPS 4 - UTBK 2022</h4>
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
                  <div className={styles.alertRanking}>
                    <div className={styles.tableKeterangan}>
                      <table>
                        <tbody>
                          <tr>
                            <td className={styles.textLeft}>Jumlah peserta</td>
                            <td>601</td>
                          </tr>
                          <tr>
                            <td className={styles.textLeft}>Nilai tertinggi</td>
                            <td>
                              317.56
                            </td>
                          </tr>
                          <tr>
                            <td className={styles.textLeft}>Nilai rata-rata</td>
                            <td>
                              87.31
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className={styles.searchBox}>
                      <Search placeholder="Cari Peserta" allowClear onSearch={onSearch} />
                    </div>
                  </div>
                  <div className={styles.contentCard}>
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

export default TryoutHasil
