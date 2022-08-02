import { createAsyncThunk } from '@reduxjs/toolkit';
import GET_DETAILS from './detailsAction';

const url = 'https://api-mobilespecs.azharimm.site/v2/';

const getDetails = createAsyncThunk(GET_DETAILS, async (slug) => {
  const response = await fetch(url + slug);
  const res = await response.json();
  const phone = res.data;
  const phoneDetails = {
    brand: phone.brand,
    name: phone.phone_name,
    image: phone.thumbnail,
    released: phone.release_date,
    os: phone.os,
    storage: phone.storage,
    bigImage: phone.phone_images[0],
  };

  return phoneDetails;
});

export default getDetails;
