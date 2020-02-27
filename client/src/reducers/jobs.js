import {
  GET_ALL_USER_COMPANIES,
  CREATE_NEW_USER_JOB,
  JOBS_ERROR
} from '../actions/types';

const initialState = {
  companies: [],
  jobs: [],
  loading: false,
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
    case CREATE_NEW_USER_JOB:
      return {
        ...state,
        loading: false,
        jobs: [...jobs, payload]
      };
    default:
      return state;
  }
}
