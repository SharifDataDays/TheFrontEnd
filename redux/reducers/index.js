import { combineReducers } from 'redux';
import authReducers from './auth';
import signupReducers from './signup'

export default combineReducers({
  auth: authReducers,
  signup : signupReducers

});
