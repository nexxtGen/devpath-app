import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_ALL_USER_LEARN_CATEGORIES,
  GET_ALL_USER_LEARN_ITEMS,
  SET_CURRENT_LEARN_CATEGORY,
  SET_CURRENT_EDITED_LEARN_CATEGORY,
  SET_CURRENT_EDITED_LEARN_ITEM,
  CREATE_NEW_LEARN_CATEGORY,
  UPDATE_LEARN_CATEGORY,
  DELETE_LEARN_CATEGORY,
  CREATE_NEW_LEARN_ITEM,
  UPDATE_LEARN_ITEM,
  DELETE_LEARN_ITEM,
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

export const deleteLearnCategory = categoryId => async dispatch => {
  try {
    await axios.delete(`/api/v1/learn-categories/${categoryId}`);

    dispatch(setAlert('Category has been deleted', 'success'));
    dispatch({
      type: DELETE_LEARN_CATEGORY,
      payload: categoryId
    });
  } catch (err) {
    dispatch({
      type: LEARN_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

export const updateLearnCategory = (
  categoryId,
  categoryData
) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.put(
      `/api/v1/learn-categories/${categoryId}`,
      categoryData,
      config
    );

    dispatch(setAlert('Category has been updated', 'success'));
    dispatch({
      type: UPDATE_LEARN_CATEGORY,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: LEARN_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

// LEARN ITEM -------------------------------------------------------------
export const createNewLearnItem = itemData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/v1/learn-items', itemData, config);
    dispatch(setAlert('New learn item has been created', 'success'));
    dispatch({
      type: CREATE_NEW_LEARN_ITEM,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: LEARN_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

export const setCurrentEditedLearnItem = item => dispatch => {
  dispatch({
    type: SET_CURRENT_EDITED_LEARN_ITEM,
    payload: item
  });
};

export const updateLearnItem = (itemId, itemData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.put(
      `/api/v1/learn-items/${itemId}`,
      itemData,
      config
    );

    dispatch(setAlert('Learn item has been updated', 'success'));
    dispatch({
      type: UPDATE_LEARN_ITEM,
      payload: { data: res.data.data, prevId: itemData.prevCategory }
    });
  } catch (err) {
    dispatch({
      type: LEARN_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

export const deleteLearnItem = (itemId, categoryId) => async dispatch => {
  try {
    const res = await axios.delete(`/api/v1/learn-items/${itemId}`);

    dispatch(setAlert('Learn item has been deleted', 'success'));
    dispatch({
      type: DELETE_LEARN_ITEM,
      payload: { data: res.data.data, categoryId }
    });
  } catch (err) {
    dispatch({
      type: LEARN_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

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
