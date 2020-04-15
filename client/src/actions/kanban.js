import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_ALL_USER_KANBAN_BOARDS,
  GET_ALL_USER_KANBAN_LANES,
  GET_ALL_USER_KANBAN_NOTES,
  KANBAN_ERROR,
  SET_CURRENT_KANBAN_BOARD,
  SET_KANBAN_BOARDS_LOADING,
  SET_KANBAN_LANES_LOADING,
  SET_KANBAN_NOTES_LOADING
} from './types';

export const getAllUserKanbanBoards = () => async dispatch => {
  try {
    dispatch(setKanbanBoardsLoading());

    const res = await axios.get('/api/v1/boards');
    dispatch({
      type: GET_ALL_USER_KANBAN_BOARDS,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: KANBAN_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

export const getAllUserKanbanLanes = () => async dispatch => {
  try {
    dispatch(setKanbanLanesLoading());

    const res = await axios.get('/api/v1/lanes');
    dispatch({
      type: GET_ALL_USER_KANBAN_LANES,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: KANBAN_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

export const getAllUserKanbanNotes = () => async dispatch => {
  try {
    dispatch(setKanbanNotesLoading());

    const res = await axios.get('/api/v1/notes');
    dispatch({
      type: GET_ALL_USER_KANBAN_NOTES,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: KANBAN_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

export const setCurrentKanbanBoard = board => dispatch => {
  dispatch({
    type: SET_CURRENT_KANBAN_BOARD,
    payload: board
  });
};

// LOADING
export const setKanbanBoardsLoading = () => {
  return {
    type: SET_KANBAN_BOARDS_LOADING
  };
};

export const setKanbanLanesLoading = () => {
  return {
    type: SET_KANBAN_LANES_LOADING
  };
};

export const setKanbanNotesLoading = () => {
  return {
    type: SET_KANBAN_NOTES_LOADING
  };
};
