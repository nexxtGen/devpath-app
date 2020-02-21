import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import flashcards from './flashcards';

export default combineReducers({
  alert,
  auth,
  profile,
  flashcards
});
