import React, { useState } from 'react';

const Home = ({ logo }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('in handleSubmit');
  };

  return (
    <div className="flex flex-col items-center bg-gray-200">
      <section className="container inline-flex justify-center items-center mt-33p">
        <img
          src={logo}
          className="h-20 m-1"
          alt="DisasterWatch logo"
        />
        <span className="m-1 text-7xl font-sans font-bold">DisasterWatch</span>
      </section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-gray-800 rounded-md w-64 h-10 p-2 focus:outline-none focus:shadow-outline"
          placeholder="Search for a location"
        />
      </form>
    </div>
  );
};

export default Home;
