import React from 'react';
import PropTypes from 'prop-types';
import { FaMicrophone } from 'react-icons/fa';
import { IoChevronBackOutline } from 'react-icons/io5';
import { AiFillSetting } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import back from '../images/home3.webp';

const Header = ({ title, count }) => {
  const year = new Date().getFullYear();
  return (
    <header>
      <nav>
        <div className="backHome">
          <Link to="/">
            <IoChevronBackOutline className="back" />
            <span className="currentYear">{year}</span>
          </Link>
        </div>
        <h3 className="popular">{title}</h3>
        <div className="icons">
          <FaMicrophone />
          <AiFillSetting />
          {' '}
        </div>
      </nav>
      <div className="headerImage">
        <div className="headerImg">
          <img src={back} className="headermainImg" alt="not exist" />
          <h3 className="header-description">{`We have (${count}) phones in stock`}</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};
