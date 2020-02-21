import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_FLASHCARDS_CATEGORIES,
  CREATE_FLASHCARDS_CATEGORY,
  FLASHCARDS_CATEGORIES_ERROR
} from './types';

// Get current users profile
export const getFlashcardsCategories = () => async dispatch => {
  try {
    const res = await axios.get('/api/v1/flashcards-categories');

    dispatch({
      type: GET_FLASHCARDS_CATEGORIES,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: FLASHCARDS_CATEGORIES_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

export const createFlashcardsCategory = categoryData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post(
      '/api/v1/flashcards-categories',
      categoryData,
      config
    );

    dispatch(setAlert('Flashcards category has been created', 'success'));

    dispatch({
      type: CREATE_FLASHCARDS_CATEGORY,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: FLASHCARDS_CATEGORIES_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};
