import { combineReducers } from 'redux';
import answersReducers from './answers';
import authReducers from './auth';

export default combineReducers({
  auth: authReducers,
  answers: answersReducers,
});
