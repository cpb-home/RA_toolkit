import { configureStore } from "@reduxjs/toolkit";
import searchFieldSliceReducer from '../slices/searchField'
import filmList from "../slices/filmList";
import favorites from "../slices/favorites";

export const store = configureStore({
  reducer: {
    searchText: searchFieldSliceReducer,
    filmList: filmList,
    favorites: favorites
  },
  middleware: (getDefaulMiddleWare) => getDefaulMiddleWare()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
