import {
  GET_PROFILE,
  CREATE_UPDATE_PROFILE,
  PROFILE_ERROR,
  GET_GITHUB_LANG,
  CLEAR_PROFILE
} from '../actions/types';

const initialState = {
  profile: null,
  profiles: [],
  githubLang: [],
  repos: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case CREATE_UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case GET_GITHUB_LANG:
      return {
        ...state,
        githubLang: payload
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false,
        githubLang: []
      };
    default:
      return state;
  }
}
