import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import PreferenceContext from '../../../context/preferences/preferenceContext';

const TriggerModal = ({ children }) => {
  const context = useContext(PreferenceContext);

  const { confirmOrderSummary, itemsToOrder } = context;

  const { coffeeStyle, coffeeType, quantity, grindOption, deliveryFrequency } =
    itemsToOrder;

  return (
    <Link
      to="modal"
      state={{ coffeeStyle, coffeeType, quantity, grindOption, deliveryFrequency }}
      onClick={() => {
        window.scrollTo(0, 0);

        document.body.classList.add('overflow-hidden');

        confirmOrderSummary();
      }}>
      <Button action={children} />
    </Link>
  );
};

export default TriggerModal;
