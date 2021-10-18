
import 'antd/dist/antd.css';
import Link from 'next/link';
import CustomLayout from '../../components/molecuels/Layout';
import { Breadcrumb, Dropdown, Button, Menu } from 'antd';
import styles from '../../styles/Blog.module.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CardBlog from '../../components/molecuels/CardBlog';
import CategoryBlog from '../../components/atoms/CategoryBlog';
import CarouselComponents from '../../components/molecuels/Carousel';



const BlogDetail = () => {

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
        <div className={styles.detailContainer}>
          <h6>Gerak 1 dimensi dibawah pengaruh gravitasi</h6>
          <h5>29 November 2021</h5>
          <div className={styles.filter}>
            <CategoryBlog />
            <CategoryBlog />
          </div>
          <div className={styles.content}>
            <div className={styles.cover}>
              <img src="/assets/dummy/DummyBlog.svg" alt="dummy" className={styles.photoContent} />
            </div>
            <div className={styles.detailBlog}>
              <p>
                Budi melempar bola secara vertikal ke atas dengan kecepatan awal .  Bola itu berada dalam pengaruh medan gravitasi sedemikian sehingga mendapatkan percepatan sebesar  pada arah  negatif sepanjang waktu seperti ditunjukkan pada gambar. Hambatan udara diabaikan.
                Kecepatan awal dari objek tersebut dinyatakan sebagai
                <br />
                Diketahui ada pengaruh gaya eksternal yang memberikan percepatan pada bola tersebut pada arah  negatif sebesar .  Kecepatan bola tersebut pada arah  dapat kita tuliskan:

                <br />
                Di sini benda mula-mula bergerak ke arah atas ( positif) dan kecepatan  dan diperlambat sebesar . Posisi bola tersebut sebagai fungsi dari waktu diberikan oleh:
                <br />

                dengan  posisi awal benda (misalnya diambil )
                <br />



                Pada saat  , ketinggian maksimum  tercapai. Kita sebut waktu dimana ketinggian maksimum tercapai sebagai . Dari persamaan  kita peroleh:

                Dari sini, bola yang semula bergerak ke arah atas ( positif) selanjutnya akan bergerak ke arah  negatif dan mencapai ketinggian awal dalam waktu  pula (waktu naik = waktu turun).

                Perhatikan, kita dapat memperoleh hasil pada persamaan  dari  persamaan  melalui aplikasi turunan untuk mencari nilai maksimum/minimum [1].

                Selanjutnya kita hitung ketinggian maksimum  yang dapat dicapai sebagai berikut:
              </p>
            </div>
            <div className={styles.footer}>
              <CarouselComponents />
            </div>
          </div>
        </div>
      </div>
    </CustomLayout >
  )
}

export default BlogDetail;
