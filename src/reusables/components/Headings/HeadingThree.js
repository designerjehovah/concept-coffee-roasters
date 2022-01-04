import React from 'react';
import PropTypes from 'prop-types';

const HeadingThree = ({ children }) => {
  return (
    <h3 className="font-display font-black text-2xl leading-8 md:w-full">{children}</h3>
  );
};

HeadingThree.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.node.isRequired]),
};

export default HeadingThree;
