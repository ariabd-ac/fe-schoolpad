

import { Breadcrumb, Tabs } from 'antd';
import 'antd/dist/antd.css';
import Link from 'next/link';
import CustomLayout from '../../components/molecuels/Layout';
import styles from '../../styles/Diagnostik.module.scss';
import { useRouter } from 'next/router'



const Diagnostik = () => {

  const router = useRouter()
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
            <Link href="/diagnostik">Diagnostik</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className={styles.container}>
          <div className={styles.content}>
            <Tabs defaultActiveKey="1" onChange={callback} size="large" className={styles.tabBarStyle}>
              <TabPane tab="TPS" key="1" className={styles.tabEvent}>
              </TabPane>
              <TabPane tab="TKA SAINTEK" key="2">
              </TabPane>
              <TabPane tab="TKA SOSHUM" key="3">
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </CustomLayout >
  )
}

export default Diagnostik

