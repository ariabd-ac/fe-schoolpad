import styles from './Testimonial.module.scss'
import { Carousel } from 'antd';
import Gap from '../../atoms/Gap'


const Testimonial = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>

        <div className={styles.oval}>
          <h5 >Testimoni Dari Para Siswa</h5>
        </div>
      </div>
      <div className={styles.carousle2}>
        <Carousel autoplay className={styles.carousel} effect="fade">
          <div className={styles.containerCarousel}>
            <div>
              <div className={styles.title}>
                <h3>Muhammad Risqi Firdaus</h3>
              </div>
              {/* <Gap height={16} /> */}
              <div className={styles.subTitle}>
                <h5>Fakultas Kedokteran, Universitas Indonesia</h5>
              </div>
              {/* <Gap height={24} /> */}
              <div className={styles.desc}>
                <p>Soal-soal tryout di schoolpad benar-benar membantu kak, meskipun susahnya minta ampun, hehehe. Terima kasih bangettt akhirnya meningkat di UTBK ke 2 setelah banyak review dan soal & pembahasan dari schoolpad. </p>
              </div>
            </div>
          </div>
          <div className={styles.containerCarousel}>
            <div>
              <div className={styles.title}>
                <h3>Anggar Tanuwardhana</h3>
              </div>

              <div className={styles.subTitle}>
                <h5>Teknik Geologi, Universitas Gadjah Mada 2020</h5>
              </div>

              <div className={styles.desc}>
                <p>TO schoolpad sangat membantu, soal-soalnya hots sehingga membantu terbiasa saat mengerjakan soal hots di UTBK.</p>
              </div>
            </div>
          </div>
          <div className={styles.containerCarousel}>
            <div>
              <div className={styles.title}>
                <h3>Adelyn Alvincia</h3>
              </div>

              <div className={styles.subTitle}>
                <h5>Psikologi, Universitas Indonesia 2020</h5>
              </div>

              <div className={styles.desc}>
                <p>TO gratisnya rutin banget, sistem dan statistiknya juga rapi. Soalnya on another level.</p>
              </div>
            </div>
          </div>
          <div className={styles.containerCarousel}>
            <div>
              <div className={styles.title}>
                <h3>Dinda Jangan Marah Marah</h3>
              </div>

              <div className={styles.subTitle}>
                <h5>Teknologi Pangan dan Hasil Pertanian, Universitas Gadjah Mada 2020</h5>
              </div>

              <div className={styles.desc}>
                <p>
                  Jujur saja, TOSS ini membuatku candu dan penasaran dengan TOSS selanjutnya. Selain itu juga sangat komplit dan sangat cocok untuk memulai persiapan UTBK.</p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>

    </div>

  )
}

export default Testimonial
