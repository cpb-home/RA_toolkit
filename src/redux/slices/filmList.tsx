import { asyncThunkCreator, buildCreateSlice, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IFilmListFetch, IFilmListReducer } from "../../models/interfaces";

const initialState = {
  loading: false,
  error: '',
  films: [

  ],
} as IFilmListReducer;

// const createSliceWithThunk = buildCreateSlice({
//   creators: { asyncThunk: asyncThunkCreator },
// })

export const fetchFilms = createAsyncThunk<IFilmListReducer>(
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

//export const { fetchFilms } = filmListSlice.actions;
//export const { filmListState, filmList } = filmListSlice.selectors;
export default filmListSlice.reducer;

// 660a3673
// https://www.omdbapi.com/?i=tt3896198&apikey=660a3673
// https://www.omdbapi.com/?apikey=660a3673&s=Terminator



/*
reducers: (create) => ({
    fetchFilms: create.asyncThunk<IFilmListFetch[]>(
      async (s: string, { rejectWithValue }) => {
        try {
          const response = await fetch(import.meta.env.VITE_FILMS_URL + 's=' + s);
 
          if (!response.ok) {
            return rejectWithValue("Loading error!");
          }
    
          return await response.json();
        } catch (e) {
          return rejectWithValue(e);
        }
      },
      {
        pending: (state) => {
          state.loading = true;
          state.error = '';
        },
        fulfilled: (state, action) => {
          //@ts-expect-error unknown type for TS but not for me
          state.films = action.payload.Search;
          state.error = '';
        },
        rejected: (state, action) => {
          state.error = action.payload as string;
        },
        settled: (state) => {
          state.loading = false;
        }
      }
    )
  }),
*/