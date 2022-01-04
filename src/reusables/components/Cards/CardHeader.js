import React from 'react';
import PropTypes from 'prop-types';

const CardHeader = ({ children }) => {
  return <section className="relative w-full mt-10">{children}</section>;
};

CardHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.node.isRequired,
  ]),
};

export default CardHeader;
