import styles from "../styles/Desing.module.scss"
import { Urls } from "@/app/constants/Urls.ts";

const DesingComponents = () => {
  return (
    <div className={styles.content}>
      <h1>Компоненты</h1>
      <p>gegegegege</p>
      <a href={Urls.COMPONENTS}>Ссылка на фигму</a>
    </div>
  )
}

export default DesingComponents
