import _ from 'lodash';
import produce from 'immer';
import {
  LOGIN_CLEAR,
  LOGIN_LOAD,
  LOGIN_UNLOAD,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_CHECK,
  SET_TOKEN,
  LOGOUT,
} from '../actions/auth';
import initialState from '../store/initialState';

function loginClearReducer(state = initialState.auth, action) {
  return produce(state, (draft) => {
    draft.loading = false;
    draft.errors = {};
    return draft;
  });
}

function loginLoadReducer(state = initialState.auth, action) {
  return produce(state, (draft) => {
    draft.loading = true;
    return draft;
  });
}

function loginUnloadReducer(state = initialState.auth, action) {
  return produce(state, (draft) => {
    draft.loading = false;
    return draft;
  });
}

function loginSuccessReducer(state = initialState.auth, action) {
  return produce(state, (draft) => {
    const { token } = action.payload;
    draft.loading = false;
    draft.errors = {};
    draft.token = token;
    return draft;
  });
}

function loginFailReducer(state = initialState.auth, action) {
  return produce(state, (draft) => {
    const { errors } = action.payload;
    draft.loading = false;
    draft.success = false;
    draft.errors = errors;
    return draft;
  });
}

function loginCheckerReducer(state = initialState.auth, action) {
  return produce(state, (draft) => {
    const { fields } = action.payload;
    _.forEach(fields, (value, key) => {
      if (value === '') {
        draft.errors[key] = 'فیلد خالی است.';
      }
    });
    return draft;
  });
}

function setTokenReducer(state = initialState.auth, action) {
  return produce(state, (draft) => {
    const { token } = action.payload;
    draft.token = token;
    draft.loading = false;
    return draft;
  });
}

function logoutReducer(state = initialState.auth, action) {
  return produce(state, (draft) => {
    draft.token = {};
    draft.loading = false;
    return draft;
  });
}

function authReducers(state = initialState.auth, action) {
  switch (action.type) {
    case LOGIN_CLEAR:
      return loginClearReducer(state, action);
    case LOGIN_LOAD:
      return loginLoadReducer(state, action);
    case LOGIN_UNLOAD:
      return loginUnloadReducer(state, action);
    case LOGIN_FAIL:
      return loginFailReducer(state, action);
    case LOGIN_SUCCESS:
      return loginSuccessReducer(state, action);
    case LOGIN_CHECK:
      return loginCheckerReducer(state, action);
    case SET_TOKEN:
      return setTokenReducer(state, action);
    case LOGOUT:
      return logoutReducer(state, action);
    default:
      return state;
  }
}

export default authReducers;
