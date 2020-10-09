import React from 'react';

const Tab = ({ type }) => (
  <button type="button" className="text-xl h-full w-40 flex items-center justify-center">
    {type}
  </button>
);

export default Tab;
