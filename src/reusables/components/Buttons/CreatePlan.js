import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const CreatePlan = ({ children }) => {
  return (
    <Link to="/subscribe">
      <Button action={children} />
    </Link>
  );
};

export default CreatePlan;
