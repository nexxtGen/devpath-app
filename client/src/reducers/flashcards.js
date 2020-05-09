import {
  GET_ALL_USER_FLASHCARDS,
  GET_FLASHCARDS_CATEGORIES,
  CREATE_FLASHCARDS_CATEGORY,
  SET_CURRENT_FLASHCARDS_CATEGORY,
  SET_FLASHCARDS_CATEGORIES_LIST,
  CREATE_NEW_FLASHCARD,
  SET_CURRENT_EDITED_FLASHCARD,
  UPDATE_CURRENT_FLASHCARD,
  DELETE_CURRENT_FLASHCARD,
  DELETE_FLASHCARDS_CATEGORY,
  FLASHCARDS_ERROR,
  SET_LOADING,
  FILTER_FLASHCARDS,
  CLEAR_FLASHCARDS_FILTER,
  CLEAR_FLASHCARDS,
  SET_FLASHCARDS_CATEGORIES_LOADING
} from '../actions/types';

const initialState = {
  flashcards: [],
  categories: null,
  categoriesList: null,
  loading: false,
  categoriesLoading: false,
  currentEditedFlashcard: null,
  currentFlashcards: [],
  filteredFlashcards: null,
  currentCategory: null,
  sliderRendered: false,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_USER_FLASHCARDS:
      return {
        ...state,
        flashcards: payload,
        currentFlashcards: payload,
        loading: false
      };
    case GET_FLASHCARDS_CATEGORIES:
      return {
        ...state,
        categories: payload,
        categoriesLoading: false
      };
    case SET_CURRENT_FLASHCARDS_CATEGORY:
      return {
        ...state,
        loading: false,
        currentCategory: { name: payload.name, length: payload.length },
        currentFlashcards: state.categories.categories
          .filter(item => item._id === payload.categoryId)
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
    case CREATE_NEW_FLASHCARD:
      return {
        ...state,
        currentFlashcards: [...state.currentFlashcards, payload],
        flashcards: [...state.currentFlashcards, payload]
      };
    case SET_CURRENT_EDITED_FLASHCARD:
      return {
        ...state,
        currentEditedFlashcard: payload
      };
    case UPDATE_CURRENT_FLASHCARD:
      return {
        ...state,
        currentFlashcards: state.currentFlashcards.map(item => {
          if (item._id === payload._id) {
            return {
              ...item,
              title: payload.title,
              description: payload.description,
              code: payload.code
            };
          }
          return item;
        }),
        flashcards: state.currentFlashcards.map(item => {
          if (item._id === payload._id) {
            return {
              ...item,
              title: payload.title,
              description: payload.description,
              code: payload.code
            };
          }
          return item;
        }),
        filteredFlashcards: state.filteredFlashcards
          ? state.filteredFlashcards.map(item => {
              if (item._id === payload._id) {
                return {
                  ...item,
                  title: payload.title,
                  description: payload.description,
                  code: payload.code
                };
              }
              return item;
            })
          : null,
        loading: false
      };
    case DELETE_CURRENT_FLASHCARD:
      return {
        ...state,
        currentFlashcards: state.currentFlashcards.filter(
          item => item._id !== payload
        )
      };
    case DELETE_FLASHCARDS_CATEGORY:
      return {
        ...state,
        loading: false
      };
    case FILTER_FLASHCARDS:
      return {
        ...state,
        filteredFlashcards: state.flashcards.filter(flashcard => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return flashcard.title.match(regex);
        })
      };
    case CLEAR_FLASHCARDS_FILTER:
      return {
        ...state,
        filteredFlashcards: null
      };
    case CLEAR_FLASHCARDS:
      return {
        ...state,
        flashcards: [],
        categories: null,
        categoriesList: null,
        loading: false,
        currentEditedFlashcard: null,
        currentFlashcards: [],
        filteredFlashcards: null,
        currentCategory: null,
        sliderRendered: false,
        error: {}
      };
    case SET_LOADING:
      return { ...state, loading: true };
    case SET_FLASHCARDS_CATEGORIES_LOADING:
      return {
        ...state,
        categoriesLoading: true
      };
    case FLASHCARDS_ERROR:
      return {
        ...state,
        loading: false,
        categoriesLoading: false,
        error: payload
      };
    default:
      return state;
  }
}
