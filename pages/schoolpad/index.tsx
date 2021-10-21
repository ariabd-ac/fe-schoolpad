import 'antd/dist/antd.css';
import Link from 'next/link';
import CustomLayout from '../../components/molecuels/Layout';
import { Breadcrumb, Dropdown, Button, Menu } from 'antd';
import styles from '../../styles/Schoolpad.module.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CardBlog from '../../components/molecuels/CardBlog';
import CategoryBlog from '../../components/atoms/CategoryBlog';
import { Tabs } from 'antd';
import CardTO from '../../components/molecuels/CardTO';
import MyTraning from './my_traning';





const Schoolpad = () => {

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
            <Link href="/blog">Schoolpad</Link>
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
            <Tabs defaultActiveKey="1" onChange={callback} size="large" className={styles.tabBarStyle}

            >
              <TabPane tab="My Event" key="1" className={styles.tabEvent}>
                <div className={styles.content}>
                  <CardTO />
                  <CardTO />
                  <CardTO />
                  <CardTO />
                  <CardTO ujian />
                  <CardTO ujian />
                  <CardTO ujian />
                  <CardTO ujian />
                  <CardTO ujian />
                  <CardTO ujian />
                </div>
              </TabPane>
              <TabPane tab="My Traning" key="2">
                <div className={styles.content2} >
                  <MyTraning />
                </div>
              </TabPane>
            </Tabs>
          </div>

        </div>
      </div>
    </CustomLayout >
  )
}

export default Schoolpad
