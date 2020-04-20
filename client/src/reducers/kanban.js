import {
  GET_ALL_USER_KANBAN_COLLECTIONS,
  GET_ALL_USER_KANBAN_BOARDS,
  GET_ALL_USER_KANBAN_LANES,
  GET_ALL_USER_KANBAN_NOTES,
  SET_CURRENT_KANBAN_COLLECTION,
  SET_CURRENT_KANBAN_BOARD,
  MOVE_NOTE_IN_LANE,
  MOVE_NOTE_BETWEEN_LANES,
  MOVE_LANE_IN_BOARD,
  SET_KANBAN_COLLECTIONS_LOADING,
  SET_KANBAN_BOARDS_LOADING,
  SET_KANBAN_LANES_LOADING,
  SET_KANBAN_NOTES_LOADING,
  KANBAN_ERROR
} from '../actions/types';

const initialState = {
  collections: null,
  boards: null,
  lanes: null,
  notes: null,
  currentCollection: null,
  currentBoard: null,
  collectionsLoading: null,
  boardsLoading: null,
  lanesLoading: null,
  notesLoading: null,
  error: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_USER_KANBAN_COLLECTIONS:
      return {
        ...state,
        collections: payload,
        collectionsLoading: false
      };
    case GET_ALL_USER_KANBAN_BOARDS:
      return {
        ...state,
        boards: payload,
        boardsLoading: false
      };
    case GET_ALL_USER_KANBAN_LANES:
      return {
        ...state,
        lanes: payload,
        lanesLoading: false
      };
    case GET_ALL_USER_KANBAN_NOTES:
      return {
        ...state,
        notes: payload,
        notesLoading: false
      };
    case SET_CURRENT_KANBAN_COLLECTION:
      return {
        ...state,
        currentCollection: payload
      };
    case SET_CURRENT_KANBAN_BOARD:
      return {
        ...state,
        currentBoard: payload
      };
    case MOVE_NOTE_IN_LANE:
      return {
        ...state,
        lanes: state.lanes.map(lane =>
          lane._id === payload._id ? payload : lane
        )
      };
    case MOVE_NOTE_BETWEEN_LANES:
      return {
        ...state,
        lanes: state.lanes.map(lane => {
          if (lane._id === payload.startLane._id) {
            return {
              ...lane,
              notes: payload.startLane.notes
            };
          } else if (lane._id === payload.finishLane._id) {
            return {
              ...lane,
              notes: payload.finishLane.notes
            };
          }
          return lane;
        })
      };
    case MOVE_LANE_IN_BOARD:
      return {
        ...state,
        currentBoard: { ...state.currentBoard, lanes: payload.laneOrders },
        boards: state.boards.map(board =>
          board._id === payload.boardId
            ? (board.lanes = payload.laneOrders)
            : board
        )
      };
    case SET_KANBAN_COLLECTIONS_LOADING:
      return {
        ...state,
        collectionsLoading: true
      };
    case SET_KANBAN_BOARDS_LOADING:
      return {
        ...state,
        boardsLoading: true
      };
    case SET_KANBAN_LANES_LOADING:
      return {
        ...state,
        lanesLoading: true
      };
    case SET_KANBAN_NOTES_LOADING:
      return {
        ...state,
        notesLoading: true
      };
    case KANBAN_ERROR:
      return {
        ...state,
        error: payload,
        boardsLoading: null,
        lanesLoading: null,
        notesLoading: null
      };
    default:
      return state;
  }
}
