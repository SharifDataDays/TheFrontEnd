import { combineReducers } from 'redux';
import pageReducers from './page';
import authReducers from './auth';
import signupReducers from './signup';
import trialsReducers from './trials';

export default combineReducers({
  page: pageReducers,
  auth: authReducers,
  signup: signupReducers,
  trials: trialsReducers,
});
