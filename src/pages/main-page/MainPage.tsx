import styles from "./MainPage.module.scss";
import { Link } from "react-router-dom";
import { AppRoute } from "@/app/constants/AppRoute.ts";
import { FormArtifact, Modal } from "@/components";
import { useState } from "react";

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return(
    <div className={styles.content}>
      <div className={styles.component}>
        <h1>Все статьи</h1>
        <Link to={'/'}>Стиль</Link>
        <Link to={'/'}>Отделы</Link>
        <Link to={'/'}>Адреса офисов</Link>
      </div>
      <div className={styles.component}>
        <h1>Недавние изменения</h1>
        <Link to={'/'}>Дизайн компании</Link>
        <Link to={'/'}>Адреса офисов</Link>
        <Link to={'/'}>Должностные лица</Link>
      </div>
      <div className={styles.component}>
        <h1>Создать</h1>
        <button onClick={() => setIsModalOpen(true)}>Документ</button>
        <Link to={'/'}>Таблица</Link>
      </div>
      <div className={styles.component}>
        <h1>Популярное</h1>
        <Link to={'/'}>Документы</Link>
        <Link to={'/'}>Регламенты</Link>
        <Link to={'/'}>Шаблоны</Link>
        <Link to={AppRoute.FAQ}>Часто задаваемые вопросы</Link>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <FormArtifact onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  )
}

export default MainPage
