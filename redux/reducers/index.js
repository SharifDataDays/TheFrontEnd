import { combineReducers } from 'redux';
import pageReducers from './page';
import authReducers from './auth';
import signupReducers from './signup';
import profileReducers from './profile';
import teamReducers from './team';

export default combineReducers({
  page: pageReducers,
  auth: authReducers,
  signup: signupReducers,
  profile: profileReducers,
  team: teamReducers,
});
