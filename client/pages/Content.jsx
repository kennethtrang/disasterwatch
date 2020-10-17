import React, { useState } from 'react';

const Content = ({ disaster }) => {
  const [data, setData] = useState([]);

  return <h1>{`${disaster} in <location>`}</h1>;
};

export default Content;
