import React from 'react';

const Tab = ({ type }) => (
  <button type="button" className="h-full w-32 flex items-center justify-center">
    {type[0].toUpperCase() + type.slice(1)}
  </button>
);

export default Tab;
