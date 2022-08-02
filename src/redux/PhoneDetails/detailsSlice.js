import { createSlice } from '@reduxjs/toolkit';
import getDetails from './detailsActionsCreator';

const detailSlice = createSlice({
  name: 'phoneDetails',
  initialState: {
    loading: false,
    phoneDetails: {},
  },
  reducer: {},
  extraReducers: {
    [getDetails.fulfilled]: (state, action) => ({
      loading: false, phoneDetails: { ...action.payload },
    }),

    [getDetails.pending]: (state, action) => ({
      loading: true, phoneDetails: { ...action.payload },
    }),
  },
});

export default detailSlice;
