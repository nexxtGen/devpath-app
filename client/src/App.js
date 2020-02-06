import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/layout/LandingPage';
import UserNavigationWrapper from './components/layout/UserNavigationWrapper';
import UserProfileInfo from './components/UserProfileInfo';
import RegisterUserFormContainer from './components/auth/RegisterUserForm/';
import LoginUserFormContainer from './components/auth/LoginUserForm/';
import LandingNavbar from './components/layout/LandingNavbar';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => {
  const logged = false;
  return (
    <Provider store={store}>
      <Router>
        {!logged && <LandingNavbar />}
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/login' component={LoginUserFormContainer} />
          <Route exact path='/register' component={RegisterUserFormContainer} />
          <UserNavigationWrapper>
            <Route exact path={'/main'} component={UserProfileInfo} />
          </UserNavigationWrapper>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
