import FilmListItem from '../FilmListItem/FilmListItem';
import { useAppSelector } from '../hooks'
import styles from './filmList.module.css'

const FilmList = () => {
  const filmList = useAppSelector((state) => state.filmList);
  console.log(filmList);

  return (
    <>
      {filmList.loading && <span>Loading...</span>}
      {filmList.error && <span>{filmList.error}</span>}
      <ul className={styles['list']}>
        {filmList.films?.length ? (
          filmList.films.map(e => 
            <FilmListItem 
              key={e.imdID}
              imdID={e.imdID} 
              Title={e.Title} 
              Year={e.Year} 
              Poster={e.Poster}
              Type={e.Type}
            />)
        ) : (
          <li className={styles['li']}>Not found such films</li>
        )}
      </ul>
    </>
  )
}

export default FilmList
