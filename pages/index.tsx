import 'antd/dist/antd.css';
import AlurComponent from '../components/molecuels/AlurComponent';
import CarouselComponents from '../components/molecuels/Carousel';
import CustomLayout from "../components/molecuels/Layout"
import styles from '../styles/Home.module.scss';
import Gap from '../components/atoms/Gap'
import CardTO from '../components/molecuels/CardTO';
import { Row, Col } from 'antd';
import AdvertService from '../components/molecuels/AdvertService';
import Testimonial from '../components/molecuels/Testimonial';

const Home = () => {
  return (
    <CustomLayout>
      <div className={styles.container}>
        <section className={styles.hero}>
          <CarouselComponents />
        </section>
        <Gap height={16} />
        <section className={styles.event}>
          <AlurComponent />
        </section>
        <Gap height={16} />
        <section className={styles.class}>
          <CardTO />
          <CardTO />
          <CardTO />
          <CardTO />
        </section>
        <section className={styles.advert}>
          <div className={styles.yt}>
            <iframe className="events-radius" width="100%" height="359" src="https://www.youtube.com/embed/lYig5B4BFvA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </div>
          <div className={styles.singleServices}>
            <AdvertService img="/assets/img/belajar.png" title="Belajar darimana saja" />
            <AdvertService img="/assets/img/cepat.png" title="Belajar lebih mudah" />
            <AdvertService img="/assets/img/mudah.png" title="Cepat belajar, cepat pintar" />
          </div>
        </section>
        <section className={styles.testimonial}>
          <Testimonial />
        </section>
        <section className={styles.myServices}>
          <div className={styles.reason}>
            <h4>Kenapa Harus Belajar di Schoolpad?</h4>
          </div>
          <div className={styles.servicesIcon}>
            <AdvertService img="/assets/img/progres.svg" title="Progres" type="ICON_SERVICES" desc="Pantau progres persiapan mu dalam mengahadapi test." />
            <AdvertService img="/assets/img/solusi.svg" title="Solusi" type="ICON_SERVICES" desc="Pelajari secara detail langkah pengerjaan soal, temukan ditahap mana kamu menghadapi kesulitan." />
            <AdvertService img="/assets/img/simulasi.svg" title="Simulasi" type="ICON_SERVICES" desc="Simulasikan secara akurat peluang untuk diterima pada program studi yang diminati." />
            <AdvertService img="/assets/img/kecakapan.svg" title="Kecakapan vs kesukaran" type="ICON_SERVICES" desc="Tingkatkan hasil melalui tahap/menu problem solving yang sesuai dengan kekuatan dan kelemahan kamu." />
          </div>
        </section>
      </div>
    </CustomLayout>
  )
}

export default Home
