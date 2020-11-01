import React from 'react';
import PropTypes from 'prop-types';

const ErrorMsg = ({ children }) => (
  <div className="m-1 text-red-600">
    {children}
  </div>
);

ErrorMsg.propTypes = {
  children: PropTypes.string,
};

ErrorMsg.defaultProps = {
  children: 'An error has occurred',
};

export default ErrorMsg;
