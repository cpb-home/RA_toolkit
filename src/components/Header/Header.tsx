import Nav from '../Nav/Nav'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles['header']}>
      <Nav />
    </div>
  )
}

export default Header
