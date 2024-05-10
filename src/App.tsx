import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import MainPage from './pages/MainPage/MainPage'
import ItemPage from './pages/ItemPage/ItemPage'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/item" element={<ItemPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Route>
    </Routes>
  )
}

export default App
