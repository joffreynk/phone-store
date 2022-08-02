import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from './Header';
import getBrands from '../redux/phoneBraands/brandActionsCreator';
import Spinner from './Spinner';

const PhoneBrands = () => {
  const { phones, loading } = useSelector(
    (store) => store.phoneBrands,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBrands());
  }, []);

  const data = phones.map((phone, i) => (
    <Link to={phone.slug} key={phone.slug.slice(i)}>
      <div className="singleBrand">
        <div className="phoneImage">
          <img src={phone.image} alt={phone.name} />
        </div>
        <div>&gt</div>
        <div>
          <h3>{phone.name}</h3>
          <p>{phone.count}</p>
        </div>
      </div>
    </Link>
  ));
  return (
    <div className="allBrands">
      <Header />
      <div className="brands">
        {loading ? <Spinner /> : data}
      </div>
    </div>
  );
};

export default PhoneBrands;
