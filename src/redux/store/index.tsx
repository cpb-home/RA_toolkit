import { configureStore } from "@reduxjs/toolkit";
import searchFieldSliceReducer from '../slices/searchField'
import filmList from "../slices/filmList";

export const store = configureStore({
  reducer: {
    searchText: searchFieldSliceReducer,
    filmList: filmList
  },
  middleware: (getDefaulMiddleWare) => getDefaulMiddleWare()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
