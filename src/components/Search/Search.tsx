import React, { useState } from 'react';
import { useAppDispatch } from '../hooks'
import styles from './search.module.css'
import { fetchFilms } from '../../redux/slices/filmList';

const Search = () => {
  const [input, setInput] = useState('');
  const dispatch = useAppDispatch();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const el: HTMLInputElement = e.currentTarget;
    setInput(el.value);
    
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log(e.target)
    dispatch(fetchFilms(input));
  }

  return (
    <form className={styles['search']} onSubmit={submitHandler}>
      <input className={styles['input']} value={input} type='search' onChange={changeHandler} /> <button className={styles['button']}>Искать</button>
    </form>
  )
}

export default Search
