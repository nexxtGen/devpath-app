import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_ALL_USER_KANBAN_BOARDS,
  KANBAN_ERROR,
  SET_KANBAN_BOARDS_LOADING
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

export const setCurrentBoard = () => async dispatch => {};

export const setKanbanBoardsLoading = () => {
  return {
    type: SET_KANBAN_BOARDS_LOADING
  };
};
