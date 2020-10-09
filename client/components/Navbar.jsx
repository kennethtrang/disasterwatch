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
    <Tab type={disaster.fire} />
    <Tab type={disaster.earthquake} />
    <Tab type={disaster.tornado} />
    <Tab type={disaster.hurricane} />
  </div>
);

export default Navbar;
