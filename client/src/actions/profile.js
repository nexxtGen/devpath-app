import axios from 'axios';
import GhPolyglot from 'gh-polyglot';

import { GET_PROFILE, PROFILE_ERROR, GET_GITHUB_LANG } from './types';

// Get current users profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('/api/v1/profile/me');
    dispatch({
      type: GET_PROFILE,
      payload: res.data.data
    });

    dispatch(getGithubLang(res.data.data.usernameservices.github));
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
