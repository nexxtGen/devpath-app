import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/layout/LandingPage/';
import LandingNavbar from './components/layout/LandingNavbar';
import LoginUser from './components/auth/LoginUserForm/';
import RegisterUser from './components/auth/RegisterUserForm/';
import UserNavigationWrapper from './components/layout/UserNavigationWrapper';
import UserProfile from './components/UserProfile';
import UserProfileForm from './components/UserProfileForm';
import UserFlashcardsContainer from './components/UserFlashcards';
import UserJobsContainer from './components/UserJobs';
import UserLearnContainer from './components/UserLearn';
import UserKanbanContainer from './components/UserKanban';
import PrivateRoute from './components/routing/PrivateRoute';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import { routes } from './static/routesUrl';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  const {
    landingPage,
    loginUser,
    registerUser,
    userProfile,
    userFlashcards,
    createEditProfile,
    userJobs,
    userLearn,
    userKanban
  } = routes;

  return (
    <Provider store={store}>
      <Router>
        <LandingNavbar />
        <Switch>
          <Route exact path={landingPage} component={LandingPage} />
          <Route exact path={loginUser} component={LoginUser} />
          <Route exact path={registerUser} component={RegisterUser} />
          <UserNavigationWrapper>
            <PrivateRoute exact path={userProfile} component={UserProfile} />
            <PrivateRoute
              exact
              path={userKanban}
              component={UserKanbanContainer}
            />
            <PrivateRoute
              exact
              path={userLearn}
              component={UserLearnContainer}
            />
            <PrivateRoute
              exact
              path={createEditProfile}
              component={UserProfileForm}
            />
            <PrivateRoute
              exact
              path={userFlashcards}
              component={UserFlashcardsContainer}
            />
            <PrivateRoute exact path={userJobs} component={UserJobsContainer} />
          </UserNavigationWrapper>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
