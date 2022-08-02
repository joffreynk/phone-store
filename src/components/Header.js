import React from 'react';
import { BsMic } from 'react-icons/bs';
import { IoChevronBackOutline } from 'react-icons/io5';
import { FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import back from '../images/home3.webp';

const Header = () => {
  const year = new Date().getFullYear();
  return (
    <header>
      <nav>
        <div className="backHome">
          <Link to="/">
            <IoChevronBackOutline className="back" />
          </Link>
          <span className="currentYear">{year}</span>
        </div>
        <h3 className="popular">Most popular</h3>
        <div className="icons">
          <BsMic />
          <FiSettings />
          {' '}
        </div>
      </nav>
      <div className="headerImage">
        <div className="headerImg">
          <img src={back} className="headermainImg" alt="not exist" />
        </div>
      </div>
    </header>
  );
};

export default Header;
