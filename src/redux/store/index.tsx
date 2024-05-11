import { configureStore } from "@reduxjs/toolkit";
import searchFieldSliceReducer from '../slices/searchField'
import filmList from "../slices/filmList";
import favorites from "../slices/favorites";
import film from "../slices/filmItem";

export const store = configureStore({
  reducer: {
    searchText: searchFieldSliceReducer,
    filmList: filmList,
    favorites: favorites,
    film: film,
  },
  middleware: (getDefaulMiddleWare) => getDefaulMiddleWare()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
