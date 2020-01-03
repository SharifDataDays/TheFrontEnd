import { combineReducers } from 'redux';
import authReducers from './auth';
import signupReducers from './signup';
import tasksReducers from './tasks';
import trialsReducers from './trials';

export default combineReducers({
  auth: authReducers,
  signup: signupReducers,
  tasks: tasksReducers,
  trials: trialsReducers,
});
