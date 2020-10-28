import React from 'react';

const Tab = ({ disaster }) => (
  <button type="button" className="h-full w-32 flex items-center justify-center rounded focus:bg-gray-300 focus:outline-none active:bg-gray-300">
    {disaster}
  </button>
);

export default Tab;
