
import 'antd/dist/antd.css';
import Link from 'next/link';
import CustomLayout from '../../components/molecuels/Layout';
import { Breadcrumb, Dropdown, Button, Menu, Pagination } from 'antd';
import styles from '../../styles/Package.module.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CardBlog from '../../components/molecuels/CardBlog';
import CardPackage from '../../components/molecuels/CardPackage';

const { SubMenu } = Menu;



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




const Packages = () => {

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
        </Breadcrumb>
        <div className={styles.container}>
          <div className={styles.title}>
            <h6>Paket Latihan</h6>
            <span>Pilih Paket atau TO yang kamu lewatkan.</span>
          </div>
          <div className={styles.filter}>
            <Dropdown overlay={menu} trigger={['click']}>
              <Button type="primary" className={styles.btnDropDown} onClick={e => e.preventDefault()}>Filter Paket <KeyboardArrowDownIcon /></Button>
            </Dropdown>
          </div>
          <div className={styles.content}>
            <CardPackage />
            <CardPackage />
            <CardPackage />
            <CardPackage />
            <CardPackage />
          </div>
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    </CustomLayout >
  )
}

export default Packages
