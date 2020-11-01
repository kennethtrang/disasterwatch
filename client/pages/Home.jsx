import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ErrorMsg from '../components/ErrorMsg';
import { DISASTER_LIST, DISASTER_TITLES } from '../data/disasters';
import searchIcon from '../assets/search-icon.png';

const Home = ({
  logo,
  history,
  location,
  setLocation,
  locationError,
  setLocationError,
}) => {
  const [selectedDisaster, setSelectedDisaster] = useState(DISASTER_LIST[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedLocation = location.trim();
    const isLocationValid = (/[a-zA-Z]/).test(trimmedLocation);
    if (!isLocationValid) {
      setLocationError(true);
      return;
    }
    history.push(`/${selectedDisaster}`);
  };

  const disasterDropdown = DISASTER_LIST.map(
    (disaster) => <option key={disaster} value={disaster}>{DISASTER_TITLES[disaster]}</option>,
  );

  return (
    <div id="home" className="flex flex-col items-center bg-gray-200">
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
            defaultValue={DISASTER_LIST[0]}
            onChange={(e) => setSelectedDisaster(e.target.value)}
            className="border border-gray-800 rounded-md h-10 p-2 mx-2 focus:outline-none focus:shadow-outline"
          >
            {disasterDropdown}
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
        && <ErrorMsg>Please enter a valid location</ErrorMsg>
      }
    </div>
  );
};

Home.propTypes = {
  logo: PropTypes.string.isRequired,
  location: PropTypes.string,
  setLocation: PropTypes.func.isRequired,
  locationError: PropTypes.bool.isRequired,
  setLocationError: PropTypes.func.isRequired,
};

Home.defaultProps = {
  location: '',
};

export default Home;
