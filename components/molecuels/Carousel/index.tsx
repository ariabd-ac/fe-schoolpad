import { Carousel } from 'antd';
import { useState } from 'react';
import styles from './Carousel.module.scss'


const CarouselComponents = () => {


  return (
    <Carousel autoplay className={styles.carousel} >
      <div className={styles.wraperCarousel}>
        <img src="/assets/img/HERO1.png" alt="carousel1" />
      </div>
      <div className={styles.wraperCarousel}>
        <img src="/assets/img/HERO2.png" alt="carousel2" />
      </div>
      <div className={styles.wraperCarousel}>
        <img src="/assets/img/HERO1.png" alt="carousel3" />
      </div>

    </Carousel>
  )
}

export default CarouselComponents
