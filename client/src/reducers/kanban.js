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
  EDIT_USER_KANBAN_LANE,
  CREATE_NEW_USER_KANBAN_NOTE,
  UPDATE_USER_KANBAN_NOTE,
  SET_CURRENT_KANBAN_COLLECTION,
  SET_CURRENT_EDITED_KANBAN_COLLECTION,
  SET_CURRENT_KANBAN_BOARD,
  SET_CURRENT_EDITED_KANBAN_BOARD,
  SET_CURRENT_KANBAN_LANE,
  SET_CURRENT_EDITED_KANBAN_NOTE,
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
  currentEditedCollection: null,
  currentBoard: null,
  currentEditedBoard: null,
  currentLane: null,
  currentEditedNote: null,
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
    case CREATE_NEW_USER_KANBAN_COLLECTION:
      return {
        ...state,
        collections: [...state.collections, payload]
      };
    case UPDATE_USER_KANBAN_COLLECTION:
      return {
        ...state,
        collections: state.collections.map(item =>
          item._id === payload._id ? payload : item
        ),
        currentCollection:
          state.currentCollection._id === payload._id
            ? payload
            : state.currentCollection,
        currentEditedCollection: null
      };
    case DELETE_USER_KANBAN_COLLECTION:
      return {
        ...state,
        collections: state.collections.filter(item => item._id !== payload),
        currentCollection:
          state.currentCollection._id === payload
            ? null
            : state.currentCollection
      };
    case CREATE_NEW_USER_KANBAN_BOARD:
      return {
        ...state,
        boards: [...state.boards, payload],
        currentCollection: {
          ...state.currentCollection,
          boards: [...state.currentCollection.boards, payload._id]
        },
        collections: state.collections.map(collection =>
          collection._id === payload.collectionId
            ? { ...collection, boards: [...collection.boards, payload._id] }
            : collection
        )
      };
    case UPDATE_USER_KANBAN_BOARD:
      return {
        ...state,
        boards: state.boards.map(item =>
          item._id === payload._id ? payload : item
        )
      };
    case DELETE_USER_KANBAN_BOARD:
      return {
        ...state,
        boards: state.boards.filter(board => board._id !== payload.boardId),
        currentCollection: {
          ...state.currentCollection,
          boards: state.currentCollection.boards.filter(
            boardId => boardId !== payload.boardId
          )
        },
        collections: state.collections.map(collection =>
          collection._id === payload.collectionId
            ? {
                ...collection,
                boards: collection.boards.filter(
                  boardId => boardId !== payload.boardId
                )
              }
            : collection
        )
      };
    case CREATE_NEW_USER_KANBAN_LANE:
      return {
        ...state,
        lanes: [...state.lanes, payload],
        boards: state.boards.map(board =>
          board._id === payload.boardId
            ? { ...board, lanes: [...board.lanes, payload._id] }
            : board
        ),
        currentBoard: {
          ...state.currentBoard,
          lanes: [...state.currentBoard.lanes, payload._id]
        }
      };
    case UPDATE_USER_KANBAN_LANE:
      return {
        ...state,
        lanes: state.lanes.map(lane =>
          lane._id === payload._id ? payload : lane
        )
      };
    case DELETE_USER_KANBAN_LANE:
      return {
        ...state,
        currentBoard: {
          ...state.currentBoard,
          lanes: state.currentBoard.lanes.filter(
            laneId => laneId !== payload.laneId
          )
        },
        lanes: state.lanes.filter(lane => lane._id !== payload.laneId),
        boards: state.boards.map(board =>
          board._id === payload.boardId
            ? {
                ...board,
                lanes: board.lanes.filter(laneId => laneId !== payload.laneId)
              }
            : board
        )
      };
    case EDIT_USER_KANBAN_LANE:
      return {
        ...state,
        lanes: state.lanes.map(lane =>
          lane._id === payload ? { ...lane, editing: true } : lane
        )
      };
    case CREATE_NEW_USER_KANBAN_NOTE:
      return {
        ...state,
        notes: [...state.notes, payload],
        lanes: state.lanes.map(lane =>
          lane._id === payload.laneId
            ? { ...lane, notes: [...lane.notes, payload._id] }
            : lane
        )
      };
    case UPDATE_USER_KANBAN_NOTE:
      return {
        ...state,
        notes: state.notes.map(note =>
          note._id === payload._id ? payload : note
        )
      };
    case SET_CURRENT_KANBAN_COLLECTION:
      return {
        ...state,
        currentCollection: payload
      };
    case SET_CURRENT_EDITED_KANBAN_COLLECTION:
      return {
        ...state,
        currentEditedCollection: payload
      };
    case SET_CURRENT_KANBAN_BOARD:
      return {
        ...state,
        currentBoard: payload
      };
    case SET_CURRENT_EDITED_KANBAN_BOARD:
      return {
        ...state,
        currentEditedBoard: payload
      };
    case SET_CURRENT_KANBAN_LANE:
      return {
        ...state,
        currentLane: payload
      };
    case SET_CURRENT_EDITED_KANBAN_NOTE:
      return {
        ...state,
        currentEditedNote: payload
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
        boards: state.boards.map(board =>
          board._id === payload.boardId
            ? { ...board, lanes: payload.laneOrders }
            : board
        ),
        currentBoard: { ...state.currentBoard, lanes: payload.laneOrders }
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
