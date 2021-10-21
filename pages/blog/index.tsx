
import 'antd/dist/antd.css';
import Link from 'next/link';
import CustomLayout from '../../components/molecuels/Layout';
import { Breadcrumb, Dropdown, Button, Menu } from 'antd';
import styles from '../../styles/Blog.module.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CardBlog from '../../components/molecuels/CardBlog';

const { SubMenu } = Menu;


const subMenu = (
  <Menu>
    <Menu.Item>
      <Button type="primary" className={styles.subMenu}>Ikut Lagi </Button>
    </Menu.Item>
    <Menu.Item>
      <Button type="primary" className={styles.subMenu}>Ikut Lagi </Button>
    </Menu.Item>
    <Menu.Item>
      <Button type="primary" className={styles.subMenu}>Ikut Lagi </Button>
    </Menu.Item>
  </Menu>
)

const menu = (
  <Menu className={styles.menuUtama}>
    <Menu.Item title="Belajar">
      {/* <Button type="primary" className={styles.subMenu}>Ikut Lagi </Button> */}
      <span>Berita</span>
    </Menu.Item>
    <Menu.Item>
      <span>Bahan Ajar</span>
      {/* <Button type="primary" className={styles.subMenu}>Ikut Lagi </Button> */}
    </Menu.Item>
    <SubMenu title="Kelas" popupClassName={styles.subMenu2} style={{ color: '#3fa9f5', textAlign: 'left' }}>
      <SubMenu title="Kelas X" popupClassName={styles.subMenu2}>
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
      <SubMenu title="Kelas XI" popupClassName={styles.subMenu2}>
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
      <SubMenu title="Kelas XII" popupClassName={styles.subMenu2}>
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
    </SubMenu>
    {/* <Menu.Item>
      <Dropdown overlay={subMenu} placement="bottomRight" arrow>
        <Button type="primary" className={styles.subMenu}>Ikut Lagi </Button>
      </Dropdown>
    </Menu.Item> */}
  </Menu>
);




const Blog = () => {

  return (
    <CustomLayout>
      <div className={styles.pages}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link href="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href="/blog">Blog</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className={styles.container}>
          <h6>Blog belajar online dari schoolpad</h6>
          <div className={styles.filter}>
            <Dropdown overlay={menu} trigger={['click']}>
              <Button type="primary" className={styles.btnDropDown} onClick={e => e.preventDefault()}>Filter Blog <KeyboardArrowDownIcon /></Button>
            </Dropdown>
          </div>
          <div className={styles.content}>
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
          </div>
        </div>
      </div>
    </CustomLayout >
  )
}

export default Blog
