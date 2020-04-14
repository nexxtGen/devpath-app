import {
  GET_ALL_USER_LEARN_CATEGORIES,
  GET_ALL_USER_LEARN_ITEMS,
  SET_CURRENT_LEARN_CATEGORY,
  SET_CURRENT_EDITED_LEARN_CATEGORY,
  SET_CURRENT_EDITED_LEARN_ITEM,
  CREATE_NEW_LEARN_CATEGORY,
  CREATE_NEW_LEARN_ITEM,
  UPDATE_LEARN_CATEGORY,
  UPDATE_LEARN_ITEM,
  DELETE_LEARN_CATEGORY,
  DELETE_LEARN_ITEM,
  SET_LEARN_CATEGORY_LOADING,
  SET_LEARN_ITEM_LOADING
} from '../actions/types';

const initialState = {
  learnItems: null,
  learnCategories: null,
  itemLoading: false,
  currentCategory: null,
  currentEditedCategory: null,
  currentEditedItem: null,
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

    case UPDATE_LEARN_CATEGORY:
      return {
        ...state,
        learnCategories: state.learnCategories.map(item =>
          item._id === payload._id ? payload : item
        )
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
    case CREATE_NEW_LEARN_ITEM:
      return {
        ...state,
        learnCategories: state.learnCategories.map(cat =>
          cat._id === payload.categoryId
            ? { ...cat, items: [...cat.items, payload] }
            : cat
        ),
        currentCategory:
          state.currentCategory !== null
            ? state.currentCategory._id === payload.categoryId
              ? {
                  ...state.currentCategory,
                  items: [...state.currentCategory.items, payload]
                }
              : state.currentCategory
            : state.currentCategory
      };
    case UPDATE_LEARN_ITEM:
      return {
        ...state,
        learnCategories:
          payload.prevId === payload.data.categoryId
            ? state.learnCategories.map(cat =>
                cat._id === payload.data.categoryId
                  ? {
                      ...cat,
                      items: cat.items.map(item =>
                        item._id === payload.data._id ? payload.data : item
                      )
                    }
                  : cat
              )
            : state.learnCategories.map(cat => {
                if (cat._id === payload.data.categoryId) {
                  return {
                    ...cat,
                    items: [...cat.items, payload.data]
                  };
                } else if (cat._id === payload.prevId) {
                  return {
                    ...cat,
                    items: cat.items.filter(
                      item => item._id !== payload.data._id
                    )
                  };
                }
                return cat;
              }),
        currentCategory: {
          ...state.currentCategory,
          items:
            payload.prevId === payload.data.categoryId
              ? state.currentCategory.items.map(item =>
                  item._id === payload.data._id ? payload.data : item
                )
              : state.currentCategory.items.filter(
                  item => item._id !== payload.data._id
                )
        },
        currentEditedItem: null
      };
    case SET_CURRENT_EDITED_LEARN_ITEM:
      return {
        ...state,
        currentEditedItem: payload
      };
    case DELETE_LEARN_ITEM:
      return {
        ...state,
        learnCategories: state.learnCategories.map(cat =>
          cat._id === payload.categoryId ? payload.data : cat
        ),
        currentCategory: payload.data
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
