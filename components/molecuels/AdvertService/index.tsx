import styles from './AdvertService.module.scss'

interface PropsAdvert {
  img?: string
  title?: string
  desc?: string
  type?: string
}

const AdvertService = (props: PropsAdvert) => {

  const { img, title, desc, type } = props;
  if (type === 'ICON_SERVICES') {
    return (
      <div className={styles.containerType}>
        <div className={styles.wrapLogo}>
          <img src={img} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.wrapDesc}>
          <div className={styles.title}>
            <h3>{title}</h3>
          </div>
          <div className={styles.desc}>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    )
  }
  return (

    <div className={styles.container}>
      <div className={styles.wrapLogo}>
        <img src={img} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.wrapDesc}>
        <div className={styles.title}>
          <h3>{title}</h3>
        </div>
        <div className={styles.desc}>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default AdvertService
