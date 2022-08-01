import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import getDetails from '../redux/PhoneDetails/detailsActionsCreator';

const PhoneDetails = () => {
  const phoneDetails = useSelector((store) => store.phoneDetails);
  const { slug } = useParams();
  console.log(phoneDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetails(slug));
  }, [slug]);
  return (
    <div>
      <Header />
      {phoneDetails.length}
      phone details
    </div>
  );
};

export default PhoneDetails;
