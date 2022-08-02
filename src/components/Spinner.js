import React from 'react';
import { ClipLoader } from 'react-spinners';

const Spinner = () => (
  <div className="spinner">
    <ClipLoader color="#fff" size={200} />
  </div>
);

export default Spinner;
