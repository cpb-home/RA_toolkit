import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentFilm: {
    Title: "",
    Year: "",
    Runtime: "",
    Genre: "",
    Director: "",
    Actors: "",
    imdbRating: "",
    imdbID: "",
    Poster: "",
    Type: "",
  },
  error: '',
  loading: false,
};

export const fetchFilm = createAsyncThunk(
  'film/fetchFilm',
  async (id: string) => {
    if (id) {
      return await fetch(import.meta.env.VITE_FILMS_URL + 'i=' + id).then(res => res.json());
    }
  }
);

const filmItemSlice = createSlice({
  name: 'film',
  initialState,
  selectors: {
    filmState: (state) => state,
    film: (state) => state.currentFilm
  },
  reducers: {
    clear: (state) => {
      state.currentFilm = {
        Title: "",
        Year: "",
        Runtime: "",
        Genre: "",
        Director: "",
        Actors: "",
        imdbRating: "",
        imdbID: "",
        Poster: "",
        Type: "",
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilm.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.currentFilm = action.payload;
      })
      .addCase(fetchFilm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
  }
});


export const { filmState, film } = filmItemSlice.selectors;
export const { clear } = filmItemSlice.actions;
export default filmItemSlice.reducer;
