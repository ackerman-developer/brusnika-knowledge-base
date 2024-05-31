import { InDeveloping } from '@/assets'
import styles from './DevelopingPage.module.scss'
import { Link } from 'react-router-dom'
import { AppRoute } from '@/app/constants/AppRoute'

const DevelopingPage = () => {
  return (
    <div className={styles.container}>
      <InDeveloping height={"500px"} width={"500px"}/>
      <h1>Страница находится в разработке</h1>
      <h2>совсем скоро она заработает</h2>
      <Link to={AppRoute.MAIN}>Вернуться на главную</Link>
    </div>
  )
}

export default DevelopingPage
