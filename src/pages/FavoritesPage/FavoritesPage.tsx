import { useAppDispatch, useAppSelector } from "../../components/hooks"
import styles from '../../components/FilmList/filmList.module.css'
import FilmListItem from "../../components/FilmListItem/FilmListItem";
import { useEffect } from "react";
import { clear } from "../../redux/slices/filmItem";

const FavoritesPage = () => {
  const favorites = useAppSelector((state) => state.favorites.films);
  const dispatch = useAppDispatch();
  useEffect (() => {
    dispatch(clear());
  }, []);

  return (
    <>
      <ul className={styles['list']}>
        {favorites.length ? (
          favorites.map(e => 
            <FilmListItem 
              key={e.imdbID}
              imdbID={e.imdbID} 
              Title={e.Title} 
              Year={e.Year} 
              Poster={e.Poster}
              Type={e.Type}
            />)
        ) : (
          <li className={styles['li']}>Not added yet</li>
        )}
      </ul>
    </>
  )
}

export default FavoritesPage
