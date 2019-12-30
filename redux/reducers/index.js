import { combineReducers } from 'redux';
import authReducers from './auth';
import signupReducers from './signup';
import tasksReducers from './tasks';

export default combineReducers({
  auth: authReducers,
  signup: signupReducers,
  tasks: tasksReducers,
});
