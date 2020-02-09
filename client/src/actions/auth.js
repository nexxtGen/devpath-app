import axios from 'axios';
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from './types';
import setAuthToken from '../utils/setAuthToken';

// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/v1/auth/me');

    dispatch({
      type: USER_LOADED,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

// Register User
export const register = ({
  name,
  email,
  password,
  terms
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ name, email, password, terms });

  try {
    const res = await axios.post('/api/v1/auth/register', body, config);

    dispatch(setAlert('Register success', 'success'));

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const error = err.response.data.error;

    if (error) {
      dispatch(setAlert(error, 'error'));
    }

    dispatch({ type: REGISTER_FAIL });
  }
};

// Login User
export const login = ({ email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/v1/auth/login', body, config);

    dispatch(setAlert('Login success', 'success'));

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const error = err.response.data.error;

    if (error) {
      dispatch(setAlert(error, 'error'));
    }

    dispatch({ type: LOGIN_FAIL });
  }
};
