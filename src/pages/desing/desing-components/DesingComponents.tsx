import styles from "../styles/Desing.module.scss"
import { Urls } from "@/app/constants/Urls.ts";

const DesingComponents = () => {
  return (
    <div className={styles.content}>
      <h1>Компоненты из дизайн системы</h1>
      <p>Созданы для упрощение работы на стадии разработки, чтобы все проекты эко-системы Брусники были в одном стиле.</p>
      <div className={styles.link}>
        <p>Ссылка на Figma:</p>
        <a href={Urls.COMPONENTS}>нажмите для перехода</a>
      </div>
    </div>
  )
}

export default DesingComponents
