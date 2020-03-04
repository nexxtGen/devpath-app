import {
  GET_ALL_USER_COMPANIES,
  GET_ALL_USER_JOBS,
  CREATE_NEW_USER_JOB,
  UPDATE_USER_JOB,
  DELETE_USER_JOB,
  JOBS_ERROR,
  SET_LOADING,
  SET_CURRENT_EDITED_JOB,
  SET_CURRENT_COMPANY,
  FILTER_JOBS,
  CLEAR_FILTER,
  CREATE_NEW_USER_COMPANY,
  UPDATE_USER_COMPANY
} from '../actions/types';

const initialState = {
  companies: [],
  jobs: [],
  loading: false,
  currentEditedJob: null,
  currentCompany: null,
  filteredJobs: null,
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
        jobs: [...state.jobs, payload],
        companies: state.companies.map(comp =>
          comp._id === payload.companyId
            ? { ...comp, jobs: [...comp.jobs, payload.companyId] }
            : comp
        ),
        loading: false
      };
    case UPDATE_USER_JOB:
      return {
        ...state,
        jobs: state.jobs.map(job => (job._id === payload._id ? payload : job)),
        loading: false
      };
    case DELETE_USER_JOB:
      return {
        ...state,
        jobs: state.jobs.filter(job => job._id !== payload.jobId),
        companies: state.companies.map(comp =>
          comp._id === payload.company._id ? payload.company : comp
        ),
        loading: false
      };
    case SET_CURRENT_EDITED_JOB: {
      return { ...state, currentEditedJob: payload };
    }
    case FILTER_JOBS:
      return {
        ...state,
        filteredJobs: state.jobs.filter(job => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return (
            job.position.match(regex) ||
            job.technologies.match(regex) ||
            job.city.match(regex)
          );
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filteredJobs: null
      };
    case JOBS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    // COMPANY
    case CREATE_NEW_USER_COMPANY:
      return {
        ...state,
        companies: [...state.companies, payload],
        loading: false
      };
    case SET_CURRENT_COMPANY: {
      return { ...state, currentCompany: payload };
    }
    case UPDATE_USER_COMPANY:
      return {
        ...state,
        companies: state.companies.map(comp =>
          comp._id === payload._id ? payload : comp
        ),
        loading: false
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
