import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import {
  Header,
  SideBar
} from "@/components";

const Layout = () => {
  return(
    <div className={styles.layout}>
      <div className={styles.header}>
        <Header/>
        <hr></hr>
      </div>
      <div className={styles.content}>
        <Outlet/>
      </div>
      <div className={styles.aside}>
        <SideBar/>
      </div>
    </div>
  )
}

export default Layout
