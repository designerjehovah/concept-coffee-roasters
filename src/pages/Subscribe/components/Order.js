import React, { useContext } from 'react';
import PreferenceContext from '../../../context/preferences/preferenceContext';
import TriggerModal from '../../../reusables/components/Buttons/TriggerModal';

const Order = () => {
  const context = useContext(PreferenceContext);

  const { itemsToOrder } = context;

  const { coffeeStyle, coffeeType, quantity, grindOption, deliveryFrequency } =
    itemsToOrder;

  return (
    <section
      id="order-summary"
      className="relative flex flex-col items-center lg:items-end gap-14 z-10">
      <article className="w-full mt-28 lg:mt-0 px-6 py-8 bg-blue-dark flex flex-col justify-start gap-5 rounded-xl">
        <p className="uppercase font-body text-base text-gray">order summary</p>
        <q className="font-display font-black text-2xl" style={{ color: '#fff' }}>
          I drink my coffee as <span className="text-green-650">{coffeeStyle}</span>, with
          a <span className="text-green-650">{coffeeType}</span> type of bean.
          <span className="text-green-650">{quantity}</span> ground ala{' '}
          <span className="text-green-650">{grindOption}</span>,sent to me{' '}
          <span className="text-green-650">{deliveryFrequency}</span>
        </q>
      </article>
      <TriggerModal>Create my plan!</TriggerModal>
    </section>
  );
};

export default Order;
