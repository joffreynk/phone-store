import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from './Header';
import getBrands from '../redux/phoneBraands/brandActionsCreator';
import Spinner from './Spinner';

const PhoneBrands = () => {
  const { phones, loading } = useSelector(
    (store) => store.phoneBrands,
  );
  let count = 0;
  if (phones.length > 0) {
    const phonesArr = [];
    phones.forEach((phone) => {
      phonesArr.push(Number(phone.count));
    });
    count = phonesArr.reduce((a, b) => a + b, 0);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    if (phones.length < 1) {
      dispatch(getBrands());
    }
  }, []);

  const data = phones.map((phone, i) => (
    <Link to={phone.slug} key={phone.slug.slice(i)}>
      <div className="singleBrand">
        <div className="phoneImage">
          <img src={phone.image} alt={phone.name} />
        </div>
        <div><FaArrowAltCircleRight /></div>
        <div>
          <h3>{phone.name}</h3>
          <p>{phone.count}</p>
        </div>
      </div>
    </Link>
  ));

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="allBrands">
      <Header title="Latest Phones" count={count} />
      <div className="brands">
        {data}
      </div>
    </div>
  );
};

export default PhoneBrands;
