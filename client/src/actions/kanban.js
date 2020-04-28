import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_ALL_USER_KANBAN_COLLECTIONS,
  GET_ALL_USER_KANBAN_BOARDS,
  GET_ALL_USER_KANBAN_LANES,
  GET_ALL_USER_KANBAN_NOTES,
  CREATE_NEW_USER_KANBAN_COLLECTION,
  UPDATE_USER_KANBAN_COLLECTION,
  DELETE_USER_KANBAN_COLLECTION,
  CREATE_NEW_USER_KANBAN_BOARD,
  UPDATE_USER_KANBAN_BOARD,
  DELETE_USER_KANBAN_BOARD,
  CREATE_NEW_USER_KANBAN_LANE,
  UPDATE_USER_KANBAN_LANE,
  DELETE_USER_KANBAN_LANE,
  SET_CURRENT_KANBAN_COLLECTION,
  SET_CURRENT_EDITED_KANBAN_COLLECTION,
  SET_CURRENT_KANBAN_BOARD,
  SET_CURRENT_EDITED_KANBAN_BOARD,
  SET_CURRENT_EDITED_KANBAN_LANE,
  MOVE_NOTE_IN_LANE,
  MOVE_NOTE_BETWEEN_LANES,
  MOVE_LANE_IN_BOARD,
  SET_KANBAN_COLLECTIONS_LOADING,
  SET_KANBAN_BOARDS_LOADING,
  SET_KANBAN_LANES_LOADING,
  SET_KANBAN_NOTES_LOADING,
  KANBAN_ERROR
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

export const createNewUserKanbanCollection = collectionData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post(
      '/api/v1/kanban-collections',
      collectionData,
      config
    );

    dispatch(setAlert('New collection has been created', 'success'));
    dispatch({
      type: CREATE_NEW_USER_KANBAN_COLLECTION,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: KANBAN_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

export const updateUserKanbanCollection = (
  collectionId,
  collectionData
) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.put(
      `/api/v1/kanban-collections/${collectionId}`,
      collectionData,
      config
    );

    dispatch(setAlert('Collection has been updated', 'success'));
    dispatch({
      type: UPDATE_USER_KANBAN_COLLECTION,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: KANBAN_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

export const deleteUserKanbanCollection = collectionId => async dispatch => {
  try {
    await axios.delete(`/api/v1/kanban-collections/${collectionId}`);

    dispatch(setAlert('Collection has been deleted', 'success'));
    dispatch({
      type: DELETE_USER_KANBAN_COLLECTION,
      payload: collectionId
    });
  } catch (err) {
    dispatch({
      type: KANBAN_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

// BOARDS ----------------------------

export const createNewUserKanbanBoard = boardData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/v1/boards', boardData, config);

    dispatch(setAlert('New board has been created', 'success'));
    dispatch({
      type: CREATE_NEW_USER_KANBAN_BOARD,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: KANBAN_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

export const updateUserKanbanBoard = (boardId, boardData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.put(`/api/v1/boards/${boardId}`, boardData, config);

    dispatch(setAlert('Board has been updated', 'success'));
    dispatch({
      type: UPDATE_USER_KANBAN_BOARD,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: KANBAN_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

export const deleteUserKanbanBoard = (
  boardId,
  collectionId
) => async dispatch => {
  try {
    await axios.delete(`/api/v1/boards/${boardId}`);

    dispatch(setAlert('Board has been deleted', 'success'));
    dispatch({
      type: DELETE_USER_KANBAN_BOARD,
      payload: { boardId, collectionId }
    });
  } catch (err) {
    dispatch({
      type: KANBAN_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

// LANES ------------------------------------

export const createNewUserKanbanLane = laneData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/v1/lanes', laneData, config);

    dispatch(setAlert('New lane has been created', 'success'));

    dispatch({
      type: CREATE_NEW_USER_KANBAN_LANE,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: KANBAN_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

export const updateUserKanbanLane = (laneId, laneData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.put(`/api/v1/lanes/${laneId}`, laneData, config);

    dispatch(setAlert('Lane has been updated', 'success'));
    dispatch({
      type: UPDATE_USER_KANBAN_LANE,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: KANBAN_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

export const deleteUserKanbanLane = (laneId, boardId) => async dispatch => {
  try {
    await axios.delete(`/api/v1/lanes/${laneId}`);

    dispatch(setAlert('Lane has been deleted', 'success'));
    dispatch({
      type: DELETE_USER_KANBAN_LANE,
      payload: { laneId, boardId }
    });
  } catch (err) {
    dispatch({
      type: KANBAN_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

// SET CURRENT ------------------------------

export const setCurrentKanbanCollection = collection => dispatch => {
  dispatch({
    type: SET_CURRENT_KANBAN_COLLECTION,
    payload: collection
  });
};

export const setCurrentEditedKanbanCollection = collection => dispatch => {
  dispatch({
    type: SET_CURRENT_EDITED_KANBAN_COLLECTION,
    payload: collection
  });
};

export const setCurrentEditedKanbanBoard = board => dispatch => {
  dispatch({
    type: SET_CURRENT_EDITED_KANBAN_BOARD,
    payload: board
  });
};

export const setCurrentKanbanBoard = board => dispatch => {
  dispatch({
    type: SET_CURRENT_KANBAN_BOARD,
    payload: board
  });
};

export const setCurrentEditedKanbanLane = lane => dispatch => {
  dispatch({
    type: SET_CURRENT_EDITED_KANBAN_LANE,
    payload: lane
  });
};

// DND ---------------------------------------------

export const moveNoteInLane = lane => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    dispatch({
      type: MOVE_NOTE_IN_LANE,
      payload: lane
    });

    await axios.put(
      `/api/v1/notes/move-note-in-lane/${lane._id}`,
      lane,
      config
    );
  } catch (err) {
    dispatch({
      type: KANBAN_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

export const moveNoteBetweenLanes = (
  startLane,
  finishLane
) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const data = { startLane, finishLane };
  try {
    dispatch({
      type: MOVE_NOTE_BETWEEN_LANES,
      payload: { startLane, finishLane }
    });

    await axios.put(
      `/api/v1/notes/move-note-between-lanes/${startLane._id}`,
      data,
      config
    );
  } catch (err) {
    dispatch({
      type: KANBAN_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
};

export const moveLaneInBoard = (boardId, laneOrders) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    dispatch({
      type: MOVE_LANE_IN_BOARD,
      payload: { boardId, laneOrders }
    });

    const res = await axios.put(
      `/api/v1/lanes/move-lane-in-board/${boardId}`,
      laneOrders,
      config
    );
  } catch (err) {
    dispatch({
      type: KANBAN_ERROR,
      payload: { msg: err.response.data.error, status: err.response.status }
    });
  }
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
