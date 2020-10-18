import React, { useState } from 'react';
import NewsContent from '../components/NewsContent';

const Content = ({ disaster }) => {
  const [data, setData] = useState([]);

  return (
    <div className="mt-32">
      <h1>{disaster}</h1>
      <NewsContent disaster={disaster} />
    </div>
  );
};

export default Content;
