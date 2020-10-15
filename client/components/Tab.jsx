import React from 'react';

const Tab = ({ type }) => (
  <button type="button" className="text-xl h-full w-40 flex items-center justify-center">
    {type[0].toUpperCase() + type.slice(1)}
  </button>
);

export default Tab;
