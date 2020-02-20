import {
  GET_FLASHCARDS_CATEGORIES,
  CREATE_FLASHCARDS_CATEGORY,
  FLASHCARDS_CATEGORIES_ERROR
} from '../actions/types';

const initialState = {
  categories: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_FLASHCARDS_CATEGORIES:
      return {
        ...state,
        categories: payload,
        loading: false
      };
    case CREATE_FLASHCARDS_CATEGORY:
      return {
        ...state,
        categories: payload,
        loading: false
      };
    case FLASHCARDS_CATEGORIES_ERROR:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
}
