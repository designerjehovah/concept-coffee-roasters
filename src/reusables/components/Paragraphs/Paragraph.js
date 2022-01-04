import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ children }) => {
  return <p className="font-body text-base leading-normal">{children}</p>;
};

Paragraph.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.node.isRequired]),
};

export default Paragraph;
