import 'antd/dist/antd.css';
import Link from 'next/link';
import CustomLayout from '../../components/molecuels/Layout';
import { Breadcrumb, Dropdown, Button, Menu, Card } from 'antd';
import styles from '../../styles/Raport.module.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CardBlog from '../../components/molecuels/CardBlog';
import CategoryBlog from '../../components/atoms/CategoryBlog';
import { Tabs } from 'antd';
import CardTO from '../../components/molecuels/CardTO';

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import RaportTable from '../../components/molecuels/RaportTable';
import CardRaport from '../../components/molecuels/CardRaport';



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
    name: "TO 1",
    nilai: 0,

  },
  {
    name: "TO 2",
    nilai: 0,

  },
  {
    name: "TO 3",
    nilai: 0,

  },
  {
    name: "TO 4",
    nilai: 0,

  },
  {
    name: "TO 5",
    nilai: 0,

  },
  {
    name: "TO 6",
    nilai: 100,

  }
];





const Raports = () => {

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
            <Link href="/raports">Rapot</Link>
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
              <TabPane tab="UTBK SAINTEK" key="1" className={styles.tabEvent}>
                <div className={styles.content}>
                  <div className={styles.alert}>
                    <CardRaport primary={false} secondary={false} ternary={false} />
                    <CardRaport secondary primary={false} ternary={false} />
                    <CardRaport ternary primary={false} secondary={false} />
                  </div>
                  <div className={styles.btnSimulasi}>
                    <Link href="/raports/simulation">
                      <Button type="primary" className={styles.btn}>Simulasi Kelulusan</Button>
                    </Link>
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
                          <LineChart
                            data={data}
                            margin={{
                              top: 5,
                              right: 30,
                              left: 20,
                              bottom: 5,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" padding={{ left: 10 }} />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                              strokeWidth={6}
                              type="monotone"
                              dataKey="nilai"
                              stroke="#3fa9f5"
                              activeDot={{ r: 10, strokeWidth: 2, }}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </Card>
                    <div className={styles.table}>
                      <RaportTable type="" />
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="UTBK SOSHUM" key="2">
                <div className={styles.content} >
                  <div className={styles.alert}>
                    <CardRaport primary={false} secondary={false} ternary={false} />
                    <CardRaport secondary primary={false} ternary={false} />
                    <CardRaport ternary primary={false} secondary={false} />
                  </div>
                  <div className={styles.btnSimulasi}>
                    <Button type="primary" className={styles.btn}>Simulasi Kelulusan</Button>
                  </div>
                  <div className={styles.contentCard}>
                    <Card className={styles.contentCardAnt}>
                      <div className={styles.top}>
                        <span>Nilai (dalam %)</span>
                        <Dropdown overlay={menu} trigger={['click']}>
                          <Button type="primary" className={styles.btnDropDown} onClick={e => e.preventDefault()}>All <KeyboardArrowDownIcon /></Button>
                        </Dropdown>
                      </div>
                      <div className={styles.chart}>
                        <ResponsiveContainer width="99%" height={400}>
                          <LineChart
                            data={data}
                            margin={{
                              top: 5,
                              right: 30,
                              left: 20,
                              bottom: 5,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" padding={{ left: 10 }} />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                              strokeWidth={6}
                              type="monotone"
                              dataKey="nilai"
                              stroke="#3fa9f5"
                              activeDot={{ r: 10, strokeWidth: 2, }}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </Card>
                    <div className={styles.table}>
                      <RaportTable type="SOSHUM" />
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

export default Raports
