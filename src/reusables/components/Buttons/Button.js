import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ action }) => {
  return (
    <button
      className="w-52 h-14 flex justify-center items-center rounded-md font-display font-black 
    text-xl bg-green-650 text-gray-light">
      {action}
    </button>
  );
};

Button.propTypes = {
  action: PropTypes.string.isRequired,
};

export default Button;
