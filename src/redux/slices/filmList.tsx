import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IFilmListReducer } from "../../models/interfaces";

const initialState = {
  loading: false,
  error: '',
  films: [

  ],
} as IFilmListReducer;

export const fetchFilms = createAsyncThunk(
  "filmList/fetchFilms",
  async (id: string) => {
    if (id) {
      return await fetch(import.meta.env.VITE_FILMS_URL + 's=' + id)
        .then(res => res.json())
    }
  }
);

export const filmListSlice = createSlice({
  name: 'filmList',
  initialState,
  selectors: {
    filmListState: (state) => state,
    filmList: (state) => state.films,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.films = action.payload.Search;
        state.loading = false;
        state.error = '';
      })
      .addCase(fetchFilms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
  },
});


export const { filmListState, filmList } = filmListSlice.selectors;
export default filmListSlice.reducer;

// 660a3673
// https://www.omdbapi.com/?i=tt3896198&apikey=660a3673
// https://www.omdbapi.com/?apikey=660a3673&s=Terminator
