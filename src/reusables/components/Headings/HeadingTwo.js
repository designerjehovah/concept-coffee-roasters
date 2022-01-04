import React from 'react';
import PropTypes from 'prop-types';

const HeadingTwo = ({ children }) => {
  return <h2 className="font-display font-black text-2mxl leading-7">{children}</h2>;
};

HeadingTwo.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.node.isRequired]),
};

export default HeadingTwo;
