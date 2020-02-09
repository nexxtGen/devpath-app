import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/layout/LandingPage/';
import UserNavigationWrapper from './components/layout/UserNavigationWrapper';
import UserProfileInfo from './components/UserProfileInfo';
import UserFlashcardsContainer from './components/UserFlashcards';
import RegisterUser from './components/auth/RegisterUserForm/';
import LoginUser from './components/auth/LoginUserForm/';
import LandingNavbar from './components/layout/LandingNavbar';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <LandingNavbar />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/login' component={LoginUser} />
          <Route exact path='/register' component={RegisterUser} />
          <UserNavigationWrapper>
            <Route exact path={'/main'} component={UserProfileInfo} />
            <Route exact path={'/card'} component={UserFlashcardsContainer} />
          </UserNavigationWrapper>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
