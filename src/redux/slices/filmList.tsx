import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";
import { IFilmListFetch, IFilmListReducer } from "../../models/interfaces";


const initialState = {
  loading: false,
  error: '',
  films: [

  ],
} as IFilmListReducer;

const createSliceWithThunk = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

export const filmListSlice = createSliceWithThunk({
  name: 'filmList',
  initialState,
  selectors: {
    filmListState: (state) => state,
    filmList: (state) => state.films,
  },
  reducers: (create) => ({
    fetchFilms: create.asyncThunk<IFilmListFetch[]>(
      async (_, { rejectWithValue }) => {
        try {
          const response = await fetch('https://www.omdbapi.com/?apikey=660a3673&s=Terminator');

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
  })
    
    
});

export const { fetchFilms } = filmListSlice.actions;
export const { filmListState, filmList } = filmListSlice.selectors;
export default filmListSlice.reducer;

/*
export const { removeUser, fetchUsers } = usersSlice.actions;
export const { usersState, usersList } = usersSlice.selectors;
export default usersSlice.reducer;

*/
// 660a3673
// https://www.omdbapi.com/?i=tt3896198&apikey=660a3673
// https://www.omdbapi.com/?apikey=660a3673&s=Terminator