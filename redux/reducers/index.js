import { combineReducers } from 'redux';
import pageReducers from './page';
import authReducers from './auth';
import signupReducers from './signup';
import tasksReducers from './tasks';

export default combineReducers({
  page: pageReducers,
  auth: authReducers,
  signup: signupReducers,
  tasks: tasksReducers,
});
