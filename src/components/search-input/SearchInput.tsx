import styles from "./SearchInput.module.scss";

const SearchInput = () => {
  return(
    <input
      className={styles.search_input}
      type="search"
      placeholder={"Поиск"}
    />
  )
}

export default SearchInput
