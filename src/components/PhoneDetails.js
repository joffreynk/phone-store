import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import getDetails from '../redux/PhoneDetails/detailsActionsCreator';
import Spinner from './Spinner';

const PhoneDetails = () => {
  const { loading, phoneDetails } = useSelector((store) => store.phoneDetails);
  const { slug } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetails(slug));
  }, [slug]);
  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <Header title={`Latest ${phoneDetails.brand} smart phones`} count={Number(slug.slice(-5))} />
      <div className="phone-detail-container">
        <h3>
          {phoneDetails.name}
          {' '}
          Phone in different positions
        </h3>
        <div className="detail-main">
          <img className="detail-main-img" src={phoneDetails.bigImage} alt={phoneDetails.brand} />
        </div>
        <div className="phone-detail-description">
          <div className="description-img">
            <img src={phoneDetails.image} alt={phoneDetails.brand} />
          </div>
          <div className="description-content">
            <h3>
              {phoneDetails.name}
              {' '}
              Phone&apos;s Properties
            </h3>
            <p>{phoneDetails.name}</p>
            <p>{phoneDetails.released}</p>
            <p>{phoneDetails.os}</p>
            <p>{phoneDetails.storage}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;
