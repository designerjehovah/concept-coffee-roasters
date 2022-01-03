import React, { Fragment } from 'react';
import Header from './components/Header';
import Commitment from './components/Commitment';
import Quality from './components/Quality';
import Headquaters from './components/Headquaters';

const About = () => {
  return (
    <Fragment>
      <Header />
      <Commitment />
      <Quality />
      <Headquaters />
    </Fragment>
  );
};

export default About;
