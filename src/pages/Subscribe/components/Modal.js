import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import HeadingTwo from '../../../reusables/components/Headings/HeadingTwo';

const Modal = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div
      onClick={(e) => {
        e.target.parentElement.id === 'content-summary' &&
          navigate('/subscribe', { replace: true });
      }}>
      {location.state && (
        <main id="content-summary">
          <div
            className="absolute inset-0 p-10 w-screen h-1/2 z-20 opacity-50 "
            style={{ backgroundColor: '#000' }}></div>
          <div className="absolute md:fixed w-full md:w-3/4 mdx:w-2/5 md:mx-auto md:top-44 z-40 inset-0 px-6 py-6">
            <div className="bg-gray-dark px-5 py-7 md:p-14 text-center md:text-left md:rounded-tl-lg md:rounded-tr-lg">
              <HeadingTwo>
                <span className="md:text-4xl" style={{ color: '#fff' }}>
                  Order Summary
                </span>
              </HeadingTwo>
            </div>
            <div className="bg-gray-light px-6 py-12 md:p-12 md:rounded-br-lg md:rounded-bl-lg">
              <q className="font-display font-black text-2xl text-gray">
                I drink my coffee as{' '}
                <span className="text-green-650">{location.state.coffeeStyle}</span>, with
                a <span className="text-green-650">{location.state.coffeeType}</span> type
                of bean. <span className="text-green-650">{location.state.quantity}</span>{' '}
                ground ala{' '}
                <span className="text-green-650">{location.state.grindOption}</span>
                ,sent to me{' '}
                <span className="text-green-650">{location.state.deliveryFrequency}</span>
              </q>
              <p className="mt-4 text-gray">
                Is this correct? You can proceed to checkout or go back to plan selection
                if something is off. Subscription discount codes can also be redeemed at
                the checkout.
              </p>
              <div className="mt-6 md:flex md:items-center md:gap-3">
                <h3 className="hidden md:block font-black font-display text-3xl">
                  $14.00/mo
                </h3>
                <button className="w-full h-14 flex justify-center items-center rounded-md font-display font-black text-xl bg-green-650 text-gray-light">
                  Checkout <span className="md:hidden">- $14.00</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default Modal;
