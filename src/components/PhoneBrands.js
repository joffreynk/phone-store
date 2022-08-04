import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Header from './Header';
import getBrands from '../redux/phoneBraands/brandActionsCreator';
import Spinner from './Spinner';

const PhoneBrands = () => {
  const { phones, loading } = useSelector(
    (store) => store.phoneBrands,
  );
  const [searchKey, setSearchKey] = useState('');
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
  const newPhones = phones.filter((phone) => (
    phone.name.toLowerCase().includes(searchKey.toLocaleLowerCase())));
  let displayPhone = [];
  if (searchKey.trim().length > 0) {
    displayPhone = [...newPhones];
  } else {
    displayPhone = [...phones];
  }

  const data = displayPhone.map((phone, i) => (
    <Link
      to={phone.slug}
      key={phone.slug.slice(i)}
      className="singleBrand"
    >
      <div className="PhonePic">
        <img src={phone.image} alt={phone.name} />
      </div>
      <div className="brand-elements">
        <div className="arrowGo"><FaArrowAltCircleRight /></div>
        <div className="brand-text">
          <p className="phone-count">{phone.count}</p>
          <h3 className="phone-name">{phone.name}</h3>
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
      <div className="search">
        <input type="text" className="serch-field" value={searchKey} placeholder="Search by phone name" onChange={(e) => setSearchKey(e.target.value)} />
        <button type="button" className="close-icon" onClick={() => setSearchKey('')}>
          <IoMdClose />
        </button>
      </div>
      <div className="brands">
        {data}
      </div>
    </div>
  );
};

export default PhoneBrands;
