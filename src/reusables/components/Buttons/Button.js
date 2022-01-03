import React from 'react';

const Button = ({ action }) => {
  return (
    <button
      className="w-52 h-14 flex justify-center items-center rounded-md font-display font-black 
    text-xl bg-green-650 text-gray-light">
      {action}
    </button>
  );
};

export default Button;
