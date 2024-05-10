import React from 'react';
import { setText } from '../../redux/slices/searchField';
import { useAppDispatch } from '../hooks'
import styles from './search.module.css'
import { debounceTime } from 'rxjs';
import { fetchFilms } from '../../redux/slices/filmList';

const Search = () => {
  const dispatch = useAppDispatch();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const el: HTMLInputElement = e.currentTarget;
    dispatch(setText(el.value));
    dispatch(fetchFilms());
    debounceTime(300);
  };

  return (
    <div className={styles['search']}>
      <input className={styles['input']} type='search' onChange={changeHandler} />
    </div>
  )
}

export default Search
