import { createSlice } from '@reduxjs/toolkit';
import getDetails from './detailsActionsCreator';

const detailSlice = createSlice({
  name: 'phoneDetails',
  initialState: [],
  reducer: {},
  extraReducers: {
    [getDetails.fulfilled]: (state, action) => [...action.payload],
  },
});

export default detailSlice;
