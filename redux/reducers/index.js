import { combineReducers } from 'redux';
import pageReducers from './page';
import authReducers from './auth';
import signupReducers from './signup';

export default combineReducers({
  page: pageReducers,
  auth: authReducers,
  signup: signupReducers,
});
