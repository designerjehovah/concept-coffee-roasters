import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CreatePlan = ({ children }) => {
  return (
    <Link to="/subscribe">
      <Button action={children} />
    </Link>
  );
};

CreatePlan.propTypes = {
  children: PropTypes.string.isRequired,
};

export default CreatePlan;
