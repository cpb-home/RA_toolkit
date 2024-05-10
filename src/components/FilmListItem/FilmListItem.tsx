import React from 'react'
import { IFilmsListItem } from '../../models/interfaces'
import styles from './filmListItem.module.css'

const FilmListItem = ({ imdID, Title, Poster, Type, Year }: IFilmsListItem) => {

  const aClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  }

  return (
    <li data-id={imdID} className={styles['item']}>
      <div className={styles['imgCont']}>
        <img src={Poster} alt='Image' />
      </div>
      <div className={styles['infoCont']}>
        <div className={styles['title']}>{Title}</div>
        <div className={styles['text']}>Year: {Year}</div>
        <div className={styles['text']}>Type: {Type}</div>
        <div className={styles['inFavorites']}>
          <label>
            <a href='#' title='Добавить в избранное' onClick={aClickHandler}>Добавить в избранное</a>
          </label>
        </div>
      </div>
    </li>
  )
}

export default FilmListItem
