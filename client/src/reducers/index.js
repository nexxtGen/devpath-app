import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import flashcards from './flashcards';
import jobs from './jobs';

export default combineReducers({
  alert,
  auth,
  profile,
  flashcards,
  jobs
});
