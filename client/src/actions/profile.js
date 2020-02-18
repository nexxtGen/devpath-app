import axios from 'axios';
import GhPolyglot from 'gh-polyglot';
import { setAlert } from './alert';
import {
  GET_PROFILE,
  CREATE_UPDATE_PROFILE,
  PROFILE_ERROR,
  GET_GITHUB_LANG
} from './types';

// Get current users profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('/api/v1/profile/me');
    dispatch({
      type: GET_PROFILE,
      payload: res.data.data
    });

    if (res.data.data.usernameservices.github) {
      dispatch(getGithubLang(res.data.data.usernameservices.github));
    }
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

export const createUpdateProfile = profileData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  //const body = JSON.stringify({ name, email, password, terms });

  try {
    const res = await axios.post('/api/v1/profile', profileData, config);

    dispatch(setAlert('Profile data has been saved', 'success'));

    dispatch({
      type: CREATE_UPDATE_PROFILE,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

export const getGithubLang = user => async dispatch => {
  try {
    var me = await new GhPolyglot(user);

    await me.userStats((err, stats) => {
      dispatch({
        type: GET_GITHUB_LANG,
        payload: stats
      });
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err }
    });
  }
};
