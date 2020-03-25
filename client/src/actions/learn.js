import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_ALL_USER_LEARN_CATEGORIES,
  GET_ALL_USER_LEARN_ITEMS,
  SET_CURRENT_LEARN_CATEGORY,
  SET_CURRENT_EDITED_LEARN_CATEGORY,
  CREATE_NEW_LEARN_CATEGORY,
  SET_LEARN_CATEGORY_LOADING,
  SET_LEARN_ITEM_LOADING,
  LEARN_ERROR
} from './types';

export const getAllUserLearnCategories = () => async dispatch => {
  try {
    dispatch(setLearnCategoryLoading());

    const res = await axios.get('/api/v1/learn-categories');

    dispatch({
      type: GET_ALL_USER_LEARN_CATEGORIES,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: LEARN_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

export const getAllUserLearnItems = () => async dispatch => {
  try {
    dispatch(setLearnItemLoading());

    const res = await axios.get('/api/v1/learn-items');

    dispatch({
      type: GET_ALL_USER_LEARN_ITEMS,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: LEARN_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

export const setCurrentLearnCategory = category => dispatch => {
  dispatch({
    type: SET_CURRENT_LEARN_CATEGORY,
    payload: category
  });
};
export const setCurrentEditedLearnCategory = category => dispatch => {
  dispatch({
    type: SET_CURRENT_EDITED_LEARN_CATEGORY,
    payload: category
  });
};

export const createNewLearnCategory = categoryData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post(
      '/api/v1/learn-categories',
      categoryData,
      config
    );

    dispatch(setAlert('New category has been created', 'success'));
    dispatch({
      type: CREATE_NEW_LEARN_CATEGORY,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: LEARN_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};
/*
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

export const deleteUserJob = jobId => async dispatch => {
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

export const filterJobs = text => async dispatch => {
  dispatch({ type: FILTER_JOBS, payload: text });
};

//Clear Filter
export const clearFilter = () => dispatch => {
  dispatch({ type: CLEAR_FILTER });
};

// Without API REQUEST

export const setCurrentEditedJob = job => async dispatch => {
  dispatch({
    type: SET_CURRENT_EDITED_JOB,
    payload: job
  });
};

// COMPANY/COMPANIES ACTIONS
export const createNewUserCompany = companyData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    dispatch(setLoading());

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
    dispatch(setLoading());

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
    dispatch(setLoading());

    const res = await axios.delete(`/api/v1/companies/${companyId}`);

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

*/

export const setLearnCategoryLoading = () => {
  return {
    type: SET_LEARN_CATEGORY_LOADING
  };
};

export const setLearnItemLoading = () => {
  return {
    type: SET_LEARN_ITEM_LOADING
  };
};
