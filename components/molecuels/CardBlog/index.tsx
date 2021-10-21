import CategoryBlog from '../../atoms/CategoryBlog'
import styles from './CardBlog.module.scss'
import { Button } from 'antd';
import Link from 'next/link'

const CardBlog = () => {
  return (
    <div className={styles.card}>
      <div className={styles.wraperPhoto}>
        <img src="/assets/dummy/DummyBlog.svg" alt="dummy" className={styles.photo} />
      </div>
      <div className={styles.content}>
        <div className={styles.date}>
          <h5>29 November 2021</h5>
        </div>
        <div className={styles.title}>
          <h3>Gerakan 1 dimensi dibawah Pengaruh Gravitasi</h3>
        </div>
        <div className={styles.category}>
          <CategoryBlog />
          <CategoryBlog />
          <CategoryBlog />
          <CategoryBlog />
          <CategoryBlog />
          <CategoryBlog />
          <CategoryBlog />
          <CategoryBlog />
        </div>
      </div>
      <div className={styles.button}>
        <Link href="/blog/4">
          <Button type="primary" className={styles.btnReadMore}>Read More</Button>
        </Link>
      </div>
    </div>
  )
}

export default CardBlog
