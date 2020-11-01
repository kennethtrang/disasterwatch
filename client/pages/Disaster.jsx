import React from 'react';
import PropTypes from 'prop-types';
import NewsContent from '../components/News/NewsContent';
import VideoContent from '../components/Video/VideoContent';
import { DISASTER_LIST } from '../data/disasters';

const Disaster = ({ disaster, location }) => (
  <div className="w-5/6 mt-32 mx-12 mb-12 grid gap-4 grid-cols-2 grid-rows-2">
    <NewsContent disaster={disaster} location={location} />
    <VideoContent disaster={disaster} location={location} />
  </div>
);

Disaster.propTypes = {
  disaster: PropTypes.oneOf(DISASTER_LIST).isRequired,
  location: PropTypes.string.isRequired,
};

export default Disaster;
