import React, { useState } from 'react';
import Tab from './Tab';
import UserForm from './UserForm';
import disaster from '../../data/disasterTypes';

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
          <Tab type={disaster.fire} />
          <Tab type={disaster.earthquake} />
          <Tab type={disaster.tornado} />
          <Tab type={disaster.hurricane} />

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

export default Navbar;
