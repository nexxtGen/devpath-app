import {
  GET_ALL_USER_FLASHCARDS,
  GET_FLASHCARDS_CATEGORIES,
  CREATE_FLASHCARDS_CATEGORY,
  SET_CURRENT_FLASHCARDS_CATEGORY,
  FLASHCARDS_ERROR
} from '../actions/types';

const initialState = {
  categories: null,
  loading: true,
  currentFlashcards: null,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_USER_FLASHCARDS:
      return {
        ...state,
        currentFlashcards: payload,
        loading: false
      };
    case GET_FLASHCARDS_CATEGORIES:
      return {
        ...state,
        categories: payload,
        loading: false
      };
    case SET_CURRENT_FLASHCARDS_CATEGORY:
      return {
        ...state,
        currentFlashcards: state.categories.categories
          .filter(item => item._id === payload)
          .map(el => el.flashcards)
          .flat()
      };
    case CREATE_FLASHCARDS_CATEGORY:
      return {
        ...state,
        categories: payload,
        loading: false
      };
    case FLASHCARDS_ERROR:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
}
