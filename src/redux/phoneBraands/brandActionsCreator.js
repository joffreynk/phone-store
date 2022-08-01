import { createAsyncThunk } from '@reduxjs/toolkit';
import GET_BRANDS from './brandAction';

const getBrands = createAsyncThunk(GET_BRANDS, async () => {
  const response = await fetch('https://api-mobilespecs.azharimm.site/v2/brands');
  const res = await response.json();
  const phones = [];
  res.data.slice(0, 60).forEach((phone) => {
    phones.push({
      id: phone.brand_id,
      count: phone.device_count,
      name: phone.brand_name,
      detail: phone.detail,
      slug: phone.brand_slug,
    });
  });
  return phones;
});

export default getBrands;
