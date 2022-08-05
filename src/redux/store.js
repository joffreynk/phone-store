import { configureStore, combineReducers } from '@reduxjs/toolkit';
import brandSlice from './phoneBraands/brandSlice';
import detailSlice from './PhoneDetails/detailsSlice';

const reducer = combineReducers({
  phoneBrands: brandSlice.reducer,
  phoneDetails: detailSlice.reducer,
});

const store = configureStore({ reducer });

export default store;
