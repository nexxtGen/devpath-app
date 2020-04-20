import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_ALL_USER_KANBAN_COLLECTIONS,
  GET_ALL_USER_KANBAN_BOARDS,
  GET_ALL_USER_KANBAN_LANES,
  GET_ALL_USER_KANBAN_NOTES,
  KANBAN_ERROR,
  SET_CURRENT_KANBAN_COLLECTION,
  SET_CURRENT_KANBAN_BOARD,
  MOVE_NOTE_IN_LANE,
  MOVE_NOTE_BETWEEN_LANES,
  MOVE_LANE_IN_BOARD,
  SET_KANBAN_COLLECTIONS_LOADING,
  SET_KANBAN_BOARDS_LOADING,
  SET_KANBAN_LANES_LOADING,
  SET_KANBAN_NOTES_LOADING
} from './types';

export const getAllUserKanbanCollections = () => async dispatch => {
  try {
    dispatch(setKanbanCollectionsLoading());

    const res = await axios.get('/api/v1/kanban-collections');

    dispatch({
      type: GET_ALL_USER_KANBAN_COLLECTIONS,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: KANBAN_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

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

export const setCurrentKanbanCollection = collection => dispatch => {
  dispatch({
    type: SET_CURRENT_KANBAN_COLLECTION,
    payload: collection
  });
};

export const setCurrentKanbanBoard = board => dispatch => {
  dispatch({
    type: SET_CURRENT_KANBAN_BOARD,
    payload: board
  });
};

export const moveNoteInLane = lane => dispatch => {
  dispatch({
    type: MOVE_NOTE_IN_LANE,
    payload: lane
  });
};

export const moveNoteBetweenLanes = (startLane, finishLane) => dispatch => {
  dispatch({
    type: MOVE_NOTE_BETWEEN_LANES,
    payload: { startLane, finishLane }
  });
};

export const moveLaneInBoard = (boardId, laneOrders) => dispatch => {
  dispatch({
    type: MOVE_LANE_IN_BOARD,
    payload: { boardId, laneOrders }
  });
};

// LOADING
export const setKanbanCollectionsLoading = () => {
  return {
    type: SET_KANBAN_COLLECTIONS_LOADING
  };
};

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
