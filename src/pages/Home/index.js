import React, { Fragment } from 'react';
import Header from './components/Header';
import Collection from './components/Collection';
import Features from './components/Features';
import Guidelines from '../../reusables/components/Guidelines/Guidelines';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Collection />
      <Features />
      <Guidelines />
    </Fragment>
  );
};

export default Home;
