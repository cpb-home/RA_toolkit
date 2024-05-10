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
      }
    },
    remove: (state, action) => {
      state.films.filter(e => e.imdbID !== action.payload);
    }
  }
});

export const { add, remove } = favoritesSlice.actions;
export default favoritesSlice.reducer;
