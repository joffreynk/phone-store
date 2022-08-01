import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from './Header';
import getBrands from '../redux/phoneBraands/brandActionsCreator';

const PhoneBrands = () => {
  const { phones, loading, message } = useSelector((store) => store.phoneBrands);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBrands());
  }, []);
  return (
    <div>
      <Header />
      {phones.length}
      {loading ? <h1>LOADING</h1> : ''}
      {message}
      {console.log(phones)}
      <h1>Hello word</h1>
      {phones.length ? <Link to={`/${phones[0].slug}`}>{phones[0].slug}</Link> : ''}
    </div>
  );
};

export default PhoneBrands;
