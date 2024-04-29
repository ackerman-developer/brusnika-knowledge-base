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
      <Link to={AppRoute.MAIN}><HomeIcon />Главная</Link>
      <Link to={AppRoute.DESING}><DesingIcon />Дизайн</Link>
      <Link to={AppRoute.TEMPLATES}><TemplateIcon />Шаблоны</Link>
      <Link to={AppRoute.ADDRESS}><AddressIcon />Адреса офисов</Link>
    </div>
  )
}

export default SideBar
