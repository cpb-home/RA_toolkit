import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import styles from './layout.module.css'

const Layout = () => {
  return (
    <div className={styles['page']}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
