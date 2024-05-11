import { createSlice } from "@reduxjs/toolkit";
import { IFavoriteReducer } from "../../models/interfaces";

const initialState = {
  films: []
} as IFavoriteReducer;

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    add: (state, action) => {
      if (state.films.every(e => e.imdbID !== action.payload.imdbID)) {
        state.films.push({
          imdbID: action.payload.imdbID,
          Title: action.payload.Title,
          Poster: action.payload.Poster,
          Year: action.payload.Year,
          Type: action.payload.Type,
        });
        localStorage.setItem('films', JSON.stringify(state.films));
      }
    },
    addAll: (state, action) => {
      state.films = action.payload;
    },
    remove: (state, action) => {
      state.films = state.films.filter(e => e.imdbID !== action.payload);
      localStorage.setItem('films', JSON.stringify(state.films));
    }
  }
});

export const { add, remove, addAll } = favoritesSlice.actions;
export default favoritesSlice.reducer;
