import styles from "./Header.module.scss";
import { SearchInput } from "@/components";

const Header = () => {
  return(
    <div className={styles.header}>
     <h1>База знаний</h1>
      <div className={styles.search}>
        <SearchInput />
      </div>
    </div>
  )
}

export default Header
