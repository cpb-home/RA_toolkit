import React from 'react'
import { IFilmsListItem } from '../../models/interfaces'
import styles from './filmListItem.module.css'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks'
import { add, remove } from '../../redux/slices/favorites'

const FilmListItem = ({ imdbID, Title, Poster, Type, Year }: IFilmsListItem) => {
  const favorites = useAppSelector((state) => state.favorites.films);
  const dispatch = useAppDispatch();

  const aClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    favorites.find(e => e.imdbID === imdbID) ? dispatch(remove(imdbID)) : dispatch(add({imdbID, Title, Poster, Type, Year}));
  }

  return (
    <li data-id={imdbID} className={styles['item']}>
      <div className={styles['imgCont']}>
        {Poster !== 'N/A' ? <img src={Poster} alt='Image' /> : 'There`s no image'}
      </div>
      <div className={styles['infoCont']}>
        <NavLink className={styles['title']} to={`/RA_toolkit/item/${imdbID}`}>
          {Title}
        </NavLink>
        <div className={styles['text']}>Year: {Year}</div>
        <div className={styles['text']}>Type: {Type}</div>
        <div className={styles['inFavorites']}>
          {favorites.find(e => e.imdbID === imdbID) ? <a href='#' title='Удалить из избранного' onClick={aClickHandler}>Удалить из избранного</a> : <a href='#' title='Добавить в избранное' onClick={aClickHandler}>Добавить в избранное</a>}
        </div>
      </div>
    </li>
  )
}

export default FilmListItem
