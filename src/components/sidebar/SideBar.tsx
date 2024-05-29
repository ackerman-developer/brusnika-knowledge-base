import styles from "./SideBar.module.scss";
import { Link } from "react-router-dom";
import { AppRoute } from "@/app/constants/AppRoute.ts";
import {
  HomeIcon,
  DesingIcon,
  TemplateIcon,
  AddressIcon
} from "@/assets";

const SideBar = () => {
  return(
    <div className={styles.sidebar}>
      <h1>Содержание</h1>
      <ul className={styles.main_list}>
        <li>
          <Link to={AppRoute.MAIN} className={styles.main_link}><HomeIcon />Главная</Link>
          <ol className={styles.secondary_list}>
            <li><Link to={AppRoute.MAIN} className={styles.secondary_link}>Все статьи</Link></li>
            <li><Link to={AppRoute.MAIN} className={styles.secondary_link}>Недавние</Link></li>
            <li><Link to={AppRoute.MAIN} className={styles.secondary_link}>Популярные</Link></li>
          </ol>
        </li>
        <li>
          <h1 className={styles.main_link}><DesingIcon />Дизайн</h1>
          <ol className={styles.secondary_list}>
            <li><Link to={AppRoute.DESING_COMPONENTS} className={styles.secondary_link}>Компоненты</Link></li>
            <li><Link to={AppRoute.DESING_ICONS} className={styles.secondary_link}>Иконки</Link></li>
            <li><Link to={AppRoute.DESING_COLORS} className={styles.secondary_link}>Цвета</Link></li>
            <li><Link to={AppRoute.DESING_TYPOGRAPHY} className={styles.secondary_link}>Типографика</Link></li>
          </ol>
        </li>
        <li>
          <Link to={AppRoute.TEMPLATES} className={styles.main_link}><TemplateIcon />Шаблоны</Link>
          <ol className={styles.secondary_list}>
            <li><Link to={AppRoute.ARTIFACT} className={styles.secondary_link}>Документы</Link></li>
            <li><Link to={AppRoute.MAIN} className={styles.secondary_link}>Таблицы</Link></li>
            <li><Link to={AppRoute.FORMULAS} className={styles.secondary_link}>Формулы</Link></li>
          </ol>
        </li>
        <li>
          <Link to={AppRoute.ADDRESS} className={styles.main_link}><AddressIcon />Адреса офисов</Link>
          <ol className={styles.secondary_list}>
            <li><Link to={AppRoute.MAIN} className={styles.secondary_link}>Захарова, 57</Link></li>
            <li><Link to={AppRoute.MAIN} className={styles.secondary_link}>Мраморская, 6</Link></li>
            <li><Link to={AppRoute.MAIN} className={styles.secondary_link}>Ритслянда, 15</Link></li>
            <li><Link to={AppRoute.MAIN} className={styles.secondary_link}>Шаумяна, 20</Link></li>
            <li><Link to={AppRoute.MAIN} className={styles.secondary_link}>Сортировачная, 22</Link></li>
          </ol>
        </li>
      </ul>
    </div>
  )
}

export default SideBar
