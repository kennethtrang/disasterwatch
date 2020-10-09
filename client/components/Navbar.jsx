import React from 'react';
import Tab from './Tab';
import disaster from '../data/disasterTypes';

const Navbar = ({ logo }) => (
  <div className="w-screen fixed h-16 flex items-center bg-blue-200">
    <img
      src={logo}
      className="h-10 mx-8"
      alt="DisasterWatch logo"
    />
    <Tab type={disaster.Fire} />
    <Tab type={disaster.Earthquake} />
    <Tab type={disaster.Tornado} />
    <Tab type={disaster.Hurricane} />
  </div>
);

export default Navbar;
