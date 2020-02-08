import axios from 'axios';
import { setAlert } from './alert';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';

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
  } catch (err) {
    const error = err.response.data.error;
    console.log(error);
    dispatch(setAlert(error, 'error'));
    dispatch({ type: REGISTER_FAIL });
  }
};
