

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






const ExamSets = () => {

  const { TabPane } = Tabs;

  const callback = (key: any) => {
    console.log(key);
  }


  return (
    <CustomLayout>
      <div className={styles.pages}>

        <div className={styles.container}>
          <div className={styles.filter}>
          </div>
          <div className={styles.content}>
            <div className={styles.examp}>
              <div className={styles.title}>TPS - Kemampuan Memahami Bacaan dan Menulis</div>
              <div className={styles.numberSoal}></div>
              <div className={styles.btnAndTime}>
                <div className={styles.btn}></div>
                <div className={styles.timer}></div>
                <div className={styles.soal}>
                  <form action="">

                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </CustomLayout >
  )
}

export default ExamSets
