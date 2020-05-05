// ALERT
export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';
// AUTH
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const USER_LOADED = 'USER_LOADED';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';
// USER PROFILE
export const GET_PROFILE = 'GET_PROFILE';
export const CREATE_UPDATE_PROFILE = 'CREATE_UPDATE_PROFILE';
export const PROFILE_ERROR = 'PROFILE_ERROR';
export const GET_GITHUB_LANG = 'GET_GITHUB_LANG';
export const CLEAR_PROFILE = 'CLEAR_PROFILE';
// FLASHCARDS
export const GET_FLASHCARDS_CATEGORIES = 'GET_FLASHCARDS_CATEGORIES';
export const CREATE_FLASHCARDS_CATEGORY = 'CREATE_FLASHCARDS_CATEGORY';
export const GET_ALL_USER_FLASHCARDS = 'GET_ALL_USER_FLASHCARDS';
export const FLASHCARDS_ERROR = 'FLASHCARDS_ERROR';
export const SET_CURRENT_FLASHCARDS_CATEGORY =
  'SET_CURRENT_FLASHCARDS_CATEGORY';
export const SET_FLASHCARDS_CATEGORIES_LIST = 'SET_FLASHCARDS_CATEGORIES_LIST';
export const CREATE_NEW_FLASHCARD = 'CREATE_NEW_FLASHCARD';
export const SET_CURRENT_EDITED_FLASHCARD = 'SET_CURRENT_EDITED_FLASHCARD';
export const UPDATE_CURRENT_FLASHCARD = 'UPDATE_CURRENT_FLASHCARD';
export const DELETE_CURRENT_FLASHCARD = 'DELETE_CURRENT_FLASHCARD';
export const DELETE_FLASHCARDS_CATEGORY = 'DELETE_FLASHCARDS_CATEGORY';
export const FILTER_FLASHCARDS = 'FILTER_FLASHCARDS';
export const CLEAR_FLASHCARDS_FILTER = 'CLEAR_FLASHCARDS_FILTER';
// JOBS
export const GET_ALL_USER_COMPANIES = 'GET_ALL_USER_COMPANIES';
export const GET_ALL_USER_JOBS = 'GET_ALL_USER_JOBS';
export const CREATE_NEW_USER_JOB = 'CREATE_NEW_USER_JOB';
export const UPDATE_USER_JOB = 'UPDATE_USER_JOB';
export const DELETE_USER_JOB = 'DELETE_USER_JOB';
export const JOBS_ERROR = 'JOBS_ERROR';
export const FILTER_JOBS = 'FILTER_JOBS';
export const CLEAR_FILTER = 'CLEAR_FILTER';
export const SET_CURRENT_EDITED_JOB = 'SET_CURRENT_EDITED_JOB';
export const SET_USER_JOB_APPLIED = 'SET_USER_JOB_APPLIED';
// COMPANIES
export const CREATE_NEW_USER_COMPANY = 'CREATE_NEW_USER_COMPANY';
export const UPDATE_USER_COMPANY = 'UPDATE_USER_COMPANY';
export const SET_CURRENT_COMPANY = 'SET_CURRENT_COMPANY';
export const DELETE_USER_COMPANY = 'DELETE_USER_COMPANY';
// LEARN
export const GET_ALL_USER_LEARN_CATEGORIES = 'GET_ALL_USER_LEARN_CATEGORIES';
export const GET_ALL_USER_LEARN_ITEMS = 'GET_ALL_USER_LEARN_ITEMS';
export const SET_CURRENT_LEARN_CATEGORY = 'SET_CURRENT_LEARN_CATEGORY';
export const SET_CURRENT_EDITED_LEARN_CATEGORY =
  'SET_CURRENT_EDITED_LEARN_CATEGORY';
export const DELETE_LEARN_CATEGORY = 'DELETE_LEARN_CATEGORY';
export const UPDATE_LEARN_CATEGORY = 'UPDATE_LEARN_CATEGORY';
export const CREATE_NEW_LEARN_CATEGORY = 'CREATE_NEW_LEARN_CATEGORY';
export const CREATE_NEW_LEARN_ITEM = 'CREATE_NEW_LEARN_ITEM';
export const UPDATE_LEARN_ITEM = 'UPDATE_LEARN_ITEM';
export const DELETE_LEARN_ITEM = 'DELETE_LEARN_ITEM';
export const SET_CURRENT_EDITED_LEARN_ITEM = 'SET_CURRENT_EDITED_LEARN_ITEM';
export const LEARN_ERROR = 'LEARN_ERROR';
// KANBAN
export const GET_ALL_USER_KANBAN_COLLECTIONS =
  'GET_ALL_USER_KANBAN_COLLECTIONS';
export const GET_ALL_USER_KANBAN_BOARDS = 'GET_ALL_USER_KANBAN_BOARDS';
export const GET_ALL_USER_KANBAN_LANES = 'GET_ALL_USER_KANBAN_LANES';
export const GET_ALL_USER_KANBAN_NOTES = 'GET_ALL_USER_KANBAN_NOTES';
// -create
export const CREATE_NEW_USER_KANBAN_COLLECTION =
  'CREATE_NEW_USER_KANBAN_COLLECTION';
export const CREATE_NEW_USER_KANBAN_BOARD = 'CREATE_NEW_USER_KANBAN_BOARD';
export const CREATE_NEW_USER_KANBAN_LANE = 'CREATE_NEW_USER_KANBAN_LANE';
export const CREATE_NEW_USER_KANBAN_NOTE = 'CREATE_NEW_USER_KANBAN_NOTE';
// -update
export const UPDATE_USER_KANBAN_COLLECTION = 'UPDATE_USER_KANBAN_COLLECTION';
export const UPDATE_USER_KANBAN_BOARD = 'UPDATE_USER_KANBAN_BOARD';
export const UPDATE_USER_KANBAN_LANE = 'UPDATE_USER_KANBAN_LANE';
export const UPDATE_USER_KANBAN_NOTE = 'UPDATE_USER_KANBAN_NOTE';
// -delete
export const DELETE_USER_KANBAN_COLLECTION = 'DELETE_USER_KANBAN_COLLECTION';
export const DELETE_USER_KANBAN_BOARD = 'DELETE_USER_KANBAN_BOARD';
export const DELETE_USER_KANBAN_LANE = 'DELETE_USER_KANBAN_LANE';
export const DELETE_USER_KANBAN_NOTE = 'DELETE_USER_KANBAN_NOTE';
// -set current
export const EDIT_USER_KANBAN_LANE = 'EDIT_USER_KANBAN_LANE';
export const SET_CURRENT_KANBAN_COLLECTION = 'SET_CURRENT_KANBAN_COLLECTION';
export const SET_CURRENT_EDITED_KANBAN_COLLECTION =
  'SET_CURRENT_EDITED_KANBAN_COLLECTION';
export const SET_CURRENT_KANBAN_BOARD = 'SET_CURRENT_KANBAN_BOARD';
export const SET_CURRENT_EDITED_KANBAN_BOARD =
  'SET_CURRENT_EDITED_KANBAN_BOARD';
export const SET_CURRENT_EDITED_KANBAN_LANE = 'SET_CURRENT_EDITED_KANBAN_LANE';
export const SET_CURRENT_KANBAN_LANE = 'SET_CURRENT_KANBAN_LANE';
export const SET_CURRENT_EDITED_KANBAN_NOTE = 'SET_CURRENT_EDITED_KANBAN_NOTE';
// - dnd
export const MOVE_NOTE_IN_LANE = 'MOVE_NOTE_IN_LANE';
export const MOVE_NOTE_BETWEEN_LANES = 'MOVE_NOTE_BETWEEN_LANES';
export const MOVE_LANE_IN_BOARD = 'MOVE_LANE_IN_BOARD';
// loading & err
export const SET_KANBAN_COLLECTIONS_LOADING = 'SET_KANBAN_COLLECTIONS_LOADING';
export const SET_KANBAN_BOARDS_LOADING = 'SET_KANBAN_BOARDS_LOADING';
export const SET_KANBAN_LANES_LOADING = 'SET_KANBAN_LANES_LOADING';
export const SET_KANBAN_NOTES_LOADING = 'SET_KANBAN_NOTES_LOADING';
export const KANBAN_ERROR = 'KANBAN_ERROR';
// OTHER
export const SET_LOADING = 'SET_LOADING';
export const SET_LEARN_ITEM_LOADING = 'SET_LEARN_ITEM_LOADING';
export const SET_LEARN_CATEGORY_LOADING = 'SET_LEARN_CATEGORY_LOADING';
