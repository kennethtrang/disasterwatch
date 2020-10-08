import React, { useState } from 'react';
import logo from '../assets/d-orig.png';

const Home = () => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('in handleSubmit');
  };

  return (
    <div className="bg-terrain-map flex flex-col justify-center items-center">
      <section className="container inline-flex justify-center items-center">
        <img
          src={logo}
          className="h-20 m-2"
          alt="DisasterWatch logo"
        />
        <span className="text-7xl font-sans font-bold">DisasterWatch</span>
      </section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-gray-800 rounded-full w-64 h-8 p-2 focus:outline-none focus:shadow-outline"
          placeholder="Search for a location"
        />
      </form>
    </div>
  );
};

export default Home;
