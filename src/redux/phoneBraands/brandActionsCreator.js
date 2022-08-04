import { createAsyncThunk } from '@reduxjs/toolkit';
import GET_BRANDS from './brandAction';

const getBrands = createAsyncThunk(GET_BRANDS, async () => {
  const response = await fetch('https://api-mobilespecs.azharimm.site/v2/latest');
  const res = await response.json();
  const phones = [];
  const data = res.data.phones;
  data.forEach((phone) => {
    phones.push({
      count: phone.slug.slice(-5),
      name: phone.phone_name,
      slug: phone.slug,
      image: phone.image,
    });
  });
  return phones;
});

export default getBrands;
