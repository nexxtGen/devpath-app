import React, { Fragment } from 'react';
import LandingPage from './components/layout/LandingPage';
import UserNavigationWrapper from './components/layout/UserNavigationWrapper';
import './App.css';

const App = () => (
  <Fragment>
    <UserNavigationWrapper />
    <LandingPage />
  </Fragment>
);

export default App;
