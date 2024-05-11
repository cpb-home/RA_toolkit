import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../components/hooks';
import styles from './itemPage.module.css'
import { useParams } from 'react-router-dom'
import { fetchFilm } from '../../redux/slices/filmItem';
import { add, remove } from '../../redux/slices/favorites';

const ItemPage = () => {
  const { imdbID } = useParams();
  const favorites = useAppSelector((state) => state.favorites.films);
  const { currentFilm, loading } = useAppSelector((state) => state.film);
  const dispatch = useAppDispatch();

  useEffect (() => {
    if (imdbID) {
      dispatch(fetchFilm(imdbID))
    }
  }, [])
  
  const aClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    favorites.find(e => e.imdbID === imdbID) ? dispatch(remove(imdbID)) : dispatch(add({imdbID, Title: currentFilm.Title, Poster: currentFilm.Poster, Type: currentFilm.Type, Year: currentFilm.Year}));
  }

  return (
    <div className={styles['item']}>
      {loading ? 
        'Loading data, please wait...' :
        <>
          <div className={styles['imgCont']}>
            {currentFilm.Poster ? 
              <img src={currentFilm.Poster} alt={currentFilm.Title} /> :
              'There is no image'
            }
          </div>
          <div className={styles['infoCont']}>
            <h1>{currentFilm.Title}</h1>
            <ul className={styles['otherInfo']}>
              <li className={styles['infoItem']}><strong>Genre:</strong> {currentFilm.Genre}</li>
              <li className={styles['infoItem']}><strong>Year:</strong> {currentFilm.Year}</li>
              <li className={styles['infoItem']}><strong>Runtime:</strong> {currentFilm.Runtime}</li>
              <li className={styles['infoItem']}><strong>Director:</strong> {currentFilm.Director}</li>
              <li className={styles['infoItem']}><strong>Actors:</strong> {currentFilm.Actors}</li>
              <li className={styles['infoItem']}><strong>imdbRating:</strong> {currentFilm.imdbRating}</li>
            </ul>
            <div className={styles['link']}>
              {favorites.find(e => e.imdbID === imdbID) ? <a href='#' title='Удалить из избранного' onClick={aClickHandler}>Удалить из избранного</a> : <a href='#' title='Добавить в избранное' onClick={aClickHandler}>Добавить в избранное</a>}
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default ItemPage
