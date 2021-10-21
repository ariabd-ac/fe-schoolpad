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





const TryOutHome = () => {



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
        </Breadcrumb>
        <div className={styles.container}>
          <h6>Try Out</h6>
          <div className={styles.filter}>

          </div>
          <div className={styles.content}>
            <CardTO tryOutHome />
            <CardTO tryOutHome />
            <CardTO tryOutHome />
            <CardTO tryOutHome />
            <CardTO tryOutHome />
            <CardTO tryOutHome />
            <CardTO tryOutHome />
            <CardTO tryOutHome />
            <CardTO tryOutHome />
            <CardTO tryOutHome />
          </div>

        </div>
      </div>
    </CustomLayout >
  )
}

export default TryOutHome
