import React, { useContext, useEffect, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import PreferenceContext from '../../context/preferences/preferenceContext';
import Header from './components/Header';
import Guidelines from '../../reusables/components/Guidelines/Guidelines';
import Preferences from './components/Preferences';
import Order from './components/Order';
import Modal from './components/Modal';

const Subscribe = () => {
  const context = useContext(PreferenceContext);

  const { readyToOrder, confirmOrder } = context;

  const { pathname } = useLocation();

  useEffect(() => {
    pathname === '/subscribe' && document.body.classList.remove('overflow-hidden');
  }, [pathname]);

  return (
    <Fragment>
      <Header />
      <Guidelines />
      <Preferences />
      <div className="lg:hidden">{readyToOrder && <Order />}</div>
      {confirmOrder && <Modal />}
    </Fragment>
  );
};

export default Subscribe;
