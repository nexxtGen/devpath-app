import {
  GET_ALL_USER_LEARN_CATEGORIES,
  GET_ALL_USER_LEARN_ITEMS,
  SET_CURRENT_LEARN_CATEGORY,
  SET_CURRENT_EDITED_LEARN_CATEGORY,
  CREATE_NEW_LEARN_CATEGORY,
  DELETE_LEARN_CATEGORY,
  SET_LEARN_CATEGORY_LOADING,
  SET_LEARN_ITEM_LOADING
} from '../actions/types';

const initialState = {
  learnItems: null,
  learnCategories: null,
  itemLoading: false,
  currentCategory: null,
  currentEditedCategory: null,
  categoryLoading: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_USER_LEARN_CATEGORIES:
      return {
        ...state,
        learnCategories: payload,
        categoryLoading: false
      };
    case GET_ALL_USER_LEARN_ITEMS:
      return {
        ...state,
        learnItems: payload,
        itemLoading: false
      };
    case CREATE_NEW_LEARN_CATEGORY:
      return {
        ...state,
        learnCategories: [...state.learnCategories, payload]
      };
    case DELETE_LEARN_CATEGORY:
      return {
        ...state,
        learnCategories: state.learnCategories.filter(
          item => item._id !== payload
        )
      };
    case SET_CURRENT_LEARN_CATEGORY:
      return {
        ...state,
        currentCategory: payload
      };
    case SET_CURRENT_EDITED_LEARN_CATEGORY:
      return {
        ...state,
        currentEditedCategory: payload
      };
    case SET_LEARN_CATEGORY_LOADING:
      return {
        ...state,
        categoryLoading: true
      };
    case SET_LEARN_ITEM_LOADING:
      return {
        ...state,
        itemLoading: true
      };
    default:
      return state;
  }
}
