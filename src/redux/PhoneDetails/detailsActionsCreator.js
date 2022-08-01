import { createAsyncThunk } from '@reduxjs/toolkit';
import GET_DETAILS from './detailsAction';

const url = 'https://api-mobilespecs.azharimm.site/v2/brands/';

const getDetails = createAsyncThunk(GET_DETAILS, async (slug) => {
  const response = await fetch(url + slug);
  const res = await response.json();
  const phoneDetails = res.data.phones.map((phone) => ({
    brand: phone.brand, image: phone.image, slug: phone.slug, phoneName: phone.phone_name,
  }));

  return phoneDetails;
});

export default getDetails;
