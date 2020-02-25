import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_FLASHCARDS_CATEGORIES,
  GET_ALL_USER_FLASHCARDS,
  CREATE_FLASHCARDS_CATEGORY,
  SET_CURRENT_FLASHCARDS_CATEGORY,
  SET_FLASHCARDS_CATEGORIES_LIST,
  CREATE_NEW_FLASHCARD,
  SET_CURRENT_EDITED_FLASHCARD,
  UPDATE_CURRENT_FLASHCARD,
  DELETE_CURRENT_FLASHCARD,
  FLASHCARDS_ERROR,
  SET_LOADING
} from './types';

// Get current users profile
export const getAllUserFlashcards = () => async dispatch => {
  try {
    dispatch(setLoading());

    const res = await axios.get('/api/v1/flashcards');

    dispatch({
      type: GET_ALL_USER_FLASHCARDS,
      payload: res.data.data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: FLASHCARDS_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

export const getFlashcardsCategories = () => async dispatch => {
  try {
    dispatch(setLoading());

    const res = await axios.get('/api/v1/flashcards-categories');

    dispatch({
      type: GET_FLASHCARDS_CATEGORIES,
      payload: res.data.data
    });

    dispatch(setFlashcardsCategoriesList(res.data.data.categories));
  } catch (err) {
    dispatch({
      type: FLASHCARDS_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

export const setFlashcardsCategoriesList = categoriesData => dispatch => {
  dispatch({
    type: SET_FLASHCARDS_CATEGORIES_LIST,
    payload: categoriesData
  });
};

export const setCurrentFLashcardsCategory = categoryId => async dispatch => {
  dispatch(setLoading());

  dispatch({
    type: SET_CURRENT_FLASHCARDS_CATEGORY,
    payload: categoryId
  });
};

export const createFlashcardsCategory = categoryData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    dispatch(setLoading());

    const res = await axios.post(
      '/api/v1/flashcards-categories',
      categoryData,
      config
    );

    dispatch(setAlert('Flashcards category has been created', 'success'));
    dispatch(getFlashcardsCategories());
    dispatch({
      type: CREATE_FLASHCARDS_CATEGORY,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: FLASHCARDS_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

export const createNewFlashcard = data => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    dispatch(setLoading());

    const res = await axios.post('/api/v1/flashcards', data, config);

    dispatch(setAlert('Flashcard has been created', 'success'));
    dispatch(getFlashcardsCategories());
    dispatch({
      type: CREATE_NEW_FLASHCARD,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: FLASHCARDS_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

export const setCurrentEditedFlashcard = flashcard => dispatch => {
  dispatch({
    type: SET_CURRENT_EDITED_FLASHCARD,
    payload: flashcard
  });
};

export const updateCurrentFlashcard = flashcard => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    dispatch(setLoading());
    const updatedFlashcard = {
      title: flashcard.title,
      description: flashcard.description,
      code: flashcard.code
    };
    const res = await axios.put(
      `/api/v1/flashcards/${flashcard._id}`,
      updatedFlashcard,
      config
    );

    dispatch(setAlert('Flashcard has been updated', 'success'));
    dispatch(getFlashcardsCategories());
    dispatch({
      type: UPDATE_CURRENT_FLASHCARD,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: FLASHCARDS_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

export const deleteCurrentFlashcard = (
  flashcardId,
  categoryId
) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    dispatch(setLoading());

    await axios.delete(`/api/v1/flashcards/${flashcardId}`, categoryId, config);

    dispatch(setAlert('Flashcard has been deleted', 'success'));
    dispatch(getFlashcardsCategories());
    dispatch({
      type: DELETE_CURRENT_FLASHCARD,
      payload: flashcardId
    });
  } catch (err) {
    dispatch({
      type: FLASHCARDS_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
