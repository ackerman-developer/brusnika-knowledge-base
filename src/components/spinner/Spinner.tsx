import styles from './Spinner.module.scss'

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <span className={styles.loader}></span>
      <p className={styles.loading}>Загрузка...</p>
    </div>
  )
}

export default Spinner
