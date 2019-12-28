import { combineReducers } from 'redux';
import answersReducers from './answers';
import authReducers from './auth';
import signupReducers from './signup'

export default combineReducers({
  auth: authReducers,
  answers: answersReducers,
  signup : signupReducers
});
