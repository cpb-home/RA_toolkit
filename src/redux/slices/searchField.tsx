import { createSlice } from '@reduxjs/toolkit'
import { ISearchField } from '../../models/interfaces'

const initialState = {
  text: '',
} as ISearchField

export const searchFieldSlice = createSlice({
  name: 'searchText',
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    }
  }
});

export default searchFieldSlice.reducer;
export const { setText } = searchFieldSlice.actions;
