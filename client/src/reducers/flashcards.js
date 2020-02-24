import {
  GET_ALL_USER_FLASHCARDS,
  GET_FLASHCARDS_CATEGORIES,
  CREATE_FLASHCARDS_CATEGORY,
  SET_CURRENT_FLASHCARDS_CATEGORY,
  SET_FLASHCARDS_CATEGORIES_LIST,
  FLASHCARDS_ERROR,
  SET_LOADING
} from '../actions/types';

const initialState = {
  categories: null,
  categoriesList: null,
  loading: false,
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
        loading: false,
        currentFlashcards: state.categories.categories
          .filter(item => item._id === payload)
          .map(el => el.flashcards)
          .flat()
      };
    case SET_FLASHCARDS_CATEGORIES_LIST:
      return {
        ...state,
        categoriesList: payload.map(item => {
          const categories = { name: item.name, _id: item._id };
          return categories;
        })
      };
    case CREATE_FLASHCARDS_CATEGORY:
      return {
        ...state,
        categories: payload,
        loading: false
      };
    case SET_LOADING:
      return { ...state, loading: true };
    case FLASHCARDS_ERROR:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
}
