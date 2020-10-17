import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Error from '../components/Error';
import searchIcon from '../assets/search-icon.png';

const Home = ({ logo }) => {
  const [selectedDisaster, setSelectedDisaster] = useState('fire');
  const [location, setLocation] = useState('');
  const [locationError, setLocationError] = useState(false);

  const setLocationHandler = (location) => {
    if (locationError) setLocationError(false);
    setLocation(location);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedDisaster, location);
    const trimmedLocation = location.trim();
    const isValid = (/[a-zA-Z]/).test(trimmedLocation);
    if (!isValid) setLocationError(true);
    const history = useHistory();
    console.log(history);
    history.push(`/${selectedDisaster}`);
  };

  return (
    <div className="flex flex-col items-center bg-gray-200">
      <section className="container inline-flex justify-center items-center mt-33p">
        <img
          src={logo}
          className="h-20 m-1 "
          alt="DisasterWatch logo"
        />
        <span className="m-1 text-7xl font-sans font-bold">DisasterWatch</span>
      </section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="disaster-option">
          <select
            name="disaster-option"
            id="disaster-option"
            onChange={(e) => setSelectedDisaster(e.target.value)}
            className="border border-gray-800 rounded-md h-10 p-2 mx-2 focus:outline-none focus:shadow-outline"
          >
            <option value="fire">Fire</option>
            <option value="earthquake">Earthquake</option>
            <option value="tornado">Tornado</option>
            <option value="hurricane">Hurricane</option>
          </select>
        </label>
        <label htmlFor="location" className="inline-flex items-center">
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => {
              if (locationError) setLocationError(false);
              setLocation(e.target.value);
            }}
            className="border border-gray-800 rounded-md w-64 h-10 p-2 focus:outline-none focus:shadow-outline"
            placeholder="Search for a city"
          />
          <img src={searchIcon} className="h-4 -m-6" alt="search icon" />
        </label>
      </form>
      {
        locationError
        && <Error>Please enter a valid location</Error>
      }
    </div>
  );
};

export default Home;
