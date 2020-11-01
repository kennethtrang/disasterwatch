import React from 'react';
import PropTypes from 'prop-types';
import { DISASTER_LIST } from '../../data/disasters';

const Tab = ({ disaster }) => (
  <button type="button" className="h-full w-32 flex items-center justify-center rounded focus:bg-gray-300 focus:outline-none active:bg-gray-300">
    {disaster}
  </button>
);

Tab.propTypes = {
  disaster: PropTypes.oneOf(DISASTER_LIST).isRequired,
};

export default Tab;
