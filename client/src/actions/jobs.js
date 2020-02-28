import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_ALL_USER_COMPANIES,
  GET_ALL_USER_JOBS,
  CREATE_NEW_USER_JOB,
  UPDATE_USER_JOB,
  DELETE_USER_JOB,
  JOBS_ERROR,
  SET_LOADING,
  SET_CURRENT_EDITED_JOB
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

export const getAllUserJobs = () => async dispatch => {
  try {
    dispatch(setLoading());

    const res = await axios.get('/api/v1/jobs');

    dispatch({
      type: GET_ALL_USER_JOBS,
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

    dispatch(setAlert('Job been created', 'success'));
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

export const updateUserJob = (jobId, jobData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    dispatch(setLoading());

    const res = await axios.put(`/api/v1/jobs/${jobId}`, jobData, config);

    dispatch(setAlert('Job has been updated', 'success'));
    dispatch({
      type: UPDATE_USER_JOB,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: JOBS_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

export const deleteUserJob = (jobId, companyId) => async dispatch => {
  try {
    dispatch(setLoading());

    const res = await axios.delete(`/api/v1/jobs/${jobId}`);

    dispatch(setAlert('Job has been deleted', 'success'));
    dispatch({
      type: DELETE_USER_JOB,
      payload: { company: res.data.data, jobId }
    });
  } catch (err) {
    dispatch({
      type: JOBS_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

// Without API REQUEST

export const setCurrentEditedJob = job => async dispatch => {
  dispatch({
    type: SET_CURRENT_EDITED_JOB,
    payload: job
  });
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
