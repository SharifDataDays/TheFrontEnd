import produce from 'immer';
import cookie from 'js-cookie';
import { LOGIN_LOAD, LOGIN_FAIL, LOGIN_SUCCESS } from '../constants/auth';
import initialState from '../store/initialState';

function loginLoadReducer(state = initialState.auth, action) {
  return produce(state, (draft) => {
    draft.loading = true;
    draft.error = '';
    return draft;
  });
}

function loginSuccessReducer(state = initialState.auth, action) {
  return produce(state, (draft) => {
    const { token } = action.payload;
    draft.loading = false;
    draft.error = '';
    draft.token = token;
    cookie.set('token', token, { expires: 1 });
    return draft;
  });
}

function loginFailReducer(state = initialState.auth, action) {
  return produce(state, (draft) => {
    const { error } = action.payload;
    draft.loading = false;
    draft.error = error;
    return draft;
  });
}

function authReducers(state = initialState.auth, action) {
  switch (action.type) {
    case LOGIN_LOAD:
      return loginLoadReducer(state, action);
    case LOGIN_FAIL:
      return loginFailReducer(state, action);
    case LOGIN_SUCCESS:
      return loginSuccessReducer(state, action);
    default:
      return state;
  }
}

export default authReducers;
