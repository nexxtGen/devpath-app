import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/layout/LandingPage';
import UserNavigationWrapper from './components/layout/UserNavigationWrapper';
import UserProfileInfo from './components/UserProfileInfo';
import RegisterUser from './components/auth/register';
import LoginUser from './components/auth/login';
import LandingNavbar from './components/layout/LandingNavbar';
import './App.css';

const App = () => {
  const logged = false;
  return (
    <Router>
      {!logged && <LandingNavbar />}
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/login' component={LoginUser} />
        <Route exact path='/register' component={RegisterUser} />
        <UserNavigationWrapper>
          <Route exact path={'/main'} component={UserProfileInfo} />
        </UserNavigationWrapper>
      </Switch>
    </Router>
  );
};

export default App;
