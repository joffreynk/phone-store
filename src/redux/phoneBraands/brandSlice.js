import { createSlice } from '@reduxjs/toolkit';
import getBrands from './brandActionsCreator';

const brandSlice = createSlice({
  name: 'phoneBrands',
  initialState: {
    loading: false,
    message: 'empty',
    phones: [],
  },
  reducer: {},
  extraReducers: {
    [getBrands.fulfilled]: (state, action) => ({
      ...state, loading: false, phones: [...action.payload], message: 'empty',
    }),
    [getBrands.pending]: (state, action) => (
      { ...state, loading: true, message: action.type }),
    [getBrands.rejected]: (state, action) => (
      { ...state, loading: false, messages: action.payload.message }),
  },
});

export default brandSlice;
