import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_ALL_USER_COMPANIES,
  GET_ALL_USER_JOBS,
  CREATE_NEW_USER_JOB,
  UPDATE_USER_JOB,
  DELETE_USER_JOB,
  FILTER_JOBS,
  CLEAR_FILTER,
  SET_USER_JOB_APPLIED,
  JOBS_ERROR,
  SET_LOADING,
  SET_CURRENT_EDITED_JOB,
  SET_CURRENT_COMPANY,
  CREATE_NEW_USER_COMPANY,
  UPDATE_USER_COMPANY,
  DELETE_USER_COMPANY
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

export const deleteUserJob = jobId => async dispatch => {
  try {
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

export const setUserJobApplied = (jobId, jobData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.put(`/api/v1/jobs/${jobId}`, jobData, config);

    dispatch({ type: SET_USER_JOB_APPLIED, payload: res.data.data });
  } catch (err) {
    dispatch({
      type: JOBS_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

export const filterJobs = text => dispatch => {
  dispatch({ type: FILTER_JOBS, payload: text });
};

export const clearFilter = () => dispatch => {
  dispatch({ type: CLEAR_FILTER });
};

export const setCurrentEditedJob = job => async dispatch => {
  dispatch({
    type: SET_CURRENT_EDITED_JOB,
    payload: job
  });
};

export const createNewUserCompany = companyData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/v1/companies', companyData, config);

    dispatch(setAlert('Company has been created', 'success'));
    dispatch({
      type: CREATE_NEW_USER_COMPANY,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: JOBS_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

export const updateUserCompany = (companyId, companyData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.put(
      `/api/v1/companies/${companyId}`,
      companyData,
      config
    );

    dispatch(setAlert('Company has been updated', 'success'));
    dispatch({
      type: UPDATE_USER_COMPANY,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: JOBS_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

export const deleteUserCompany = companyId => async dispatch => {
  try {
    await axios.delete(`/api/v1/companies/${companyId}`);

    dispatch(setAlert('Company has been deleted', 'success'));
    dispatch({
      type: DELETE_USER_COMPANY,
      payload: companyId
    });
  } catch (err) {
    dispatch({
      type: JOBS_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

export const setCurrentCompany = company => async dispatch => {
  dispatch({
    type: SET_CURRENT_COMPANY,
    payload: company
  });
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
