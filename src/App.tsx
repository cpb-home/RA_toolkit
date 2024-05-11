import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import MainPage from './pages/MainPage/MainPage'
import ItemPage from './pages/ItemPage/ItemPage'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage'
import { useAppDispatch } from './components/hooks'
import { addAll } from './redux/slices/favorites'

function App() {
  const dispatch = useAppDispatch();

  const fromLS = localStorage.getItem('films');
  const parsedLS = fromLS && JSON.parse(fromLS);
  if (parsedLS) {
    dispatch(addAll(parsedLS));
  }

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/item/:imdbID" element={<ItemPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Route>
    </Routes>
  )
}

export default App
