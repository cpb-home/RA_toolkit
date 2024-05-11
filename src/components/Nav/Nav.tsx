import { NavLink } from 'react-router-dom'
import styles from './nav.module.css'

const Nav = () => {
  const selected = ({ isActive }: { isActive: boolean }) => isActive ? `${styles['item']} ${styles['selected']}` : styles['item'];

  return (
    <ul className={styles['nav']}>
      <li className={styles['li']}>
        <NavLink className={selected} to='/'>Главная</NavLink>
      </li>
      <li className={styles['li']}>
        <NavLink className={selected} to='/RA_toolkit/favorites'>Избранное</NavLink>
      </li>
      <li className={styles['item']}>
        <a href='https://www.omdbapi.com/' title='Тестовый сайт' target='blank'>Сайт фильмов</a>
      </li>
    </ul>
  )
}

export default Nav
