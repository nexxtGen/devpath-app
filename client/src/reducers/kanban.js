import {
  GET_ALL_USER_KANBAN_BOARDS,
  SET_KANBAN_BOARDS_LOADING,
  KANBAN_ERROR
} from '../actions/types';
import { cyan } from '@material-ui/core/colors';

const initialState = {
  boards: null,
  lanes: null,
  notes: null,
  currentBoard: null,
  boardsLoading: null,
  error: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_USER_KANBAN_BOARDS:
      return {
        ...state,
        boards: payload,
        boardsLoading: false
      };
    case SET_KANBAN_BOARDS_LOADING:
      return {
        ...state,
        boardsLoading: true
      };
    case KANBAN_ERROR:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
}
