import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_ALL_USER_COMPANIES,
  CREATE_NEW_USER_JOB,
  JOBS_ERROR,
  SET_LOADING
} from './types';

export const getAllUserCompanies = () => async dispatch => {
  try {
    dispatch(setLoading());

    const res = await axios.get('/api/v1/companies');

    dispatch({
      type: GET_ALL_USER_COMPANIES,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: JOBS_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

export const createNewUserJob = jobData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    dispatch(setLoading());

    const res = await axios.post('/api/v1/jobs', jobData, config);

    dispatch(setAlert('Flashcards category has been created', 'success'));
    dispatch({
      type: CREATE_NEW_USER_JOB,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: JOBS_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
