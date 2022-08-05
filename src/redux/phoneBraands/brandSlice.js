import { createSlice } from '@reduxjs/toolkit';
import getBrands from './brandActionsCreator';

const brandSlice = createSlice({
  name: 'phoneBrands',
  initialState: {
    loading: false,
    phones: [],
  },
  reducer: {},
  extraReducers: {
    [getBrands.fulfilled]: (state, action) => ({
      ...state, loading: false, phones: [...action.payload],
    }),
    [getBrands.pending]: (state, action) => (
      { ...state, loading: true, ...action.payload }),
    [getBrands.rejected]: (state, action) => (
      { ...state, loading: false, ...action.payload }),
  },
});

export default brandSlice;
