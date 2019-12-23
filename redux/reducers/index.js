import { combineReducers } from 'redux';
import answersReducers from './answers';

export default combineReducers({
  answers: answersReducers,
});
