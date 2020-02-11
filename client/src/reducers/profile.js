import { GET_PROFILE, PROFILE_ERROR, GET_GITHUB_LANG } from '../actions/types';

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
    default:
      return state;
  }
}
