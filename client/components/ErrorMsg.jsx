import React from 'react';

const ErrorMsg = ({ children }) => (
  <div className="m-1 text-red-600">
    {children}
  </div>
);

export default ErrorMsg;
