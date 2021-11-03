
import 'antd/dist/antd.css';
import Link from 'next/link';
import CustomLayout from '../../../components/molecuels/Layout';
import { Breadcrumb, Dropdown, Button, Menu, Pagination, Table, Tag, Radio, Space } from 'antd';
import styles from '../../../styles/LihatPackgaes.module.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CardBlog from '../../../components/molecuels/CardBlog';
import CardPackage from '../../../components/molecuels/CardPackage';
import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useState } from 'react';


const columns = [
  {
    title: 'Tanggal',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Sesi',
    dataIndex: 'sesi',
    key: 'sesi',
  },
  {
    title: 'Waktu',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Score',
    key: 'score',
    dataIndex: 'score',
    width: '300px'
  },
  {
    title: '',
    key: 'action',
    render: () => (
      <Space size="middle">
        <Button size="small" type="primary" className={styles.detail}>Detail</Button>
        {/* <a>Invite {record.name}</a> */}
        <Button size="small" type="link" className={styles.hapus}>Hapus</Button>
      </Space>
    ),
    width: '100px'
  },
];

const data = [
  {
    key: '1',
    date: '3 months ago',
    sesi: 'Semua',
    time: '0 detik',
    score: 0.0,
  },

];



const LihatPackgaes = () => {
  const [isPrem, setIsPrem] = useState(true);

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
              <MenuBookSharpIcon className={styles.iconDetail} fontSize='small' />
              <span>10 Soal</span>
            </div>
            <div className={styles.wrapperDesc}>
              <WatchLaterRoundedIcon className={styles.iconDetail} fontSize='small' />
              <span>25 Menit</span>
            </div>
          </div>
          <div className={styles.btnWraper}>
            {
              isPrem ?
                <>
                  <div className={styles.btn}>
                    <Button type="primary" className={styles.lihat}>Kerjakan</Button>
                  </div>
                </> :
                <>
                  <div className={styles.btn}>
                    <Button type="primary" className={styles.preview}><SearchRoundedIcon /><Link href="/packages/2"><span>Preview Soal</span></Link></Button>
                  </div>
                  <div className={styles.btn}>
                    <Button type="primary" className={styles.lihat}>Upgrade ke Schoolpad Prime</Button>
                  </div>
                </>
            }
          </div>
          <div className={styles.content}>
            {
              isPrem &&
              <>
                <h3>Percobaan</h3>
                <div className={styles.tablePercobaan}>
                  <Table
                    columns={columns}
                    pagination={false}
                    dataSource={data}
                  />
                </div>
              </>
            }
          </div>
        </div>
      </div>
    </CustomLayout >
  )
}

export default LihatPackgaes
