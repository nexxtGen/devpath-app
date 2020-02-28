import {
  GET_ALL_USER_COMPANIES,
  GET_ALL_USER_JOBS,
  CREATE_NEW_USER_JOB,
  JOBS_ERROR,
  SET_LOADING,
  SET_CURRENT_EDITED_JOB
} from '../actions/types';

const initialState = {
  companies: [],
  jobs: [],
  loading: false,
  currentEditedJob: null,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_USER_COMPANIES:
      return {
        ...state,
        companies: payload,
        loading: false
      };
    case GET_ALL_USER_JOBS:
      return {
        ...state,
        jobs: payload,
        loading: false
      };
    case CREATE_NEW_USER_JOB:
      return {
        ...state,
        loading: false,
        jobs: [...state.jobs, payload]
      };
    case SET_CURRENT_EDITED_JOB: {
      return { ...state, currentEditedJob: payload };
    }
    case JOBS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
