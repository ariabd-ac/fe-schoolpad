
import 'antd/dist/antd.css';
import Link from 'next/link';
import CustomLayout from '../../components/molecuels/Layout';
import { Breadcrumb, Dropdown, Button, Menu, Pagination } from 'antd';
import styles from '../../styles/LihatPackgaes.module.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CardBlog from '../../components/molecuels/CardBlog';
import CardPackage from '../../components/molecuels/CardPackage';
import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';



const LihatPackgaes = () => {

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
          <Breadcrumb.Item>
            <Link href="/packages">Pos Test BAB 1. Persamaan dan Pertidaksamaan Linear Nilai Mutlak</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className={styles.container}>
          <div className={styles.title}>
            <h6>Pos Test BAB 1. Persamaan dan Pertidaksamaan Linear Nilai Mutlak</h6>
          </div>
          <div className={styles.filter}>
            <div className={styles.wrapperDesc}>
              <MenuBookSharpIcon />
              <span>10 Soal</span>
            </div>
            <div className={styles.wrapperDesc}>
              <WatchLaterRoundedIcon />
              <span>25 Menit</span>
            </div>
          </div>
          <div className={styles.btnWraper}>
            <div className={styles.btn}>
              <Button type="primary" className={styles.preview}><SearchRoundedIcon /><Link href="/packages/2"><span>Preview Soal</span></Link></Button>
            </div>
            <div className={styles.btn}>
              <Button type="primary" className={styles.lihat}>Upgrade ke Schoolpad Prime</Button>
            </div>
          </div>
          <div className={styles.content}>

          </div>

        </div>
      </div>
    </CustomLayout >
  )
}

export default LihatPackgaes
