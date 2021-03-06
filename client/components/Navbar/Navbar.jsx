import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tab from './Tab';
import UserForm from './UserForm';
import { DISASTER_TITLES } from '../../data/disasters';

const Navbar = ({ logo }) => {
  const userButtonStyle = 'm-4 p-1 w-24 border-2 border-blue-400 rounded-md';

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState('signup');

  const handleUserClick = (e) => {
    setIsFormOpen(true);
    if (e.target.id === 'login-btn') setFormType('login');
    else setFormType('signup');
  };

  return (
    <>
      <div className="w-screen fixed h-16 flex justify-between bg-white">
        <span
          id="nav-left"
          className="flex items-center"
        >
          <img
            src={logo}
            className="h-10 mx-8"
            alt="DisasterWatch logo"
          />
          <NavLink to="/wildfire">
            <Tab disaster={DISASTER_TITLES.wildfire} />
          </NavLink>
          <NavLink to="/earthquake">
            <Tab disaster={DISASTER_TITLES.earthquake} />
          </NavLink>
          <NavLink to="/tornado">
            <Tab disaster={DISASTER_TITLES.tornado} />
          </NavLink>
          <NavLink to="/hurricane">
            <Tab disaster={DISASTER_TITLES.hurricane} />
          </NavLink>
        </span>
        <span
          id="nav-right"
          className="flex items-center mr-10"
        >
          <button
            id="login-btn"
            type="button"
            className={`${userButtonStyle} bg-white`}
            onClick={(e) => handleUserClick(e)}
          >
            Log in
          </button>
          <button
            id="signup-btn"
            type="button"
            className={`${userButtonStyle} bg-blue-400 text-white`}
            onClick={(e) => handleUserClick(e)}
          >
            Sign Up
          </button>
        </span>
      </div>
      {
        isFormOpen && <UserForm type={formType} setIsFormOpen={setIsFormOpen} />
      }
    </>
  );
};

Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Navbar;
