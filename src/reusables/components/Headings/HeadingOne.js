import React from 'react';

const HeadingOne = ({ children }) => {
  return (
    <h1 className="font-display font-black text-4xl md:text-4mxl leading-10 lg:leading-tight text-gray-light">
      {children}
    </h1>
  );
};

export default HeadingOne;
