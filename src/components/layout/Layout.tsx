import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import {
  Header,
  SideBar
} from "@/components";

const Layout = () => {
  return(
    <>
      <div className={styles.side}>
        <SideBar />
      </div>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </>
  )
}

export default Layout
