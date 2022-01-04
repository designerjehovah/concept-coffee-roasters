import React from 'react';
import PropTypes from 'prop-types';

const HeadingOne = ({ children }) => {
  return (
    <h1 className="font-display font-black text-4xl md:text-4mxl leading-10 lg:leading-tight text-gray-light">
      {children}
    </h1>
  );
};

HeadingOne.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.node.isRequired]),
};

export default HeadingOne;
