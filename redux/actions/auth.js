import _ from 'lodash';
import { loginAPI } from '../api/auth';

export const LOGIN_CLEAR = 'LOGIN_CLEAR';
export const LOGIN_LOAD = 'LOGIN_LOAD';
export const LOGIN_UNLOAD = 'LOGIN_UNLOAD';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN_CHECK = 'LOGIN_CHECK';
export const LOGOUT = 'LOGOUT';

function loginClearAction() {
  return {
    type: LOGIN_CLEAR,
  };
}

function loginLoadAction() {
  return {
    type: LOGIN_LOAD,
  };
}

function loginUnloadAction() {
  return {
    type: LOGIN_UNLOAD,
  };
}

function loginSuccessAction(token) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token,
    },
  };
}

function loginFailAction(errors) {
  return {
    type: LOGIN_FAIL,
    payload: {
      errors,
    },
  };
}

export function loginCheckerAction(fields) {
  return {
    type: LOGIN_CHECK,
    payload: {
      fields,
    },
  };
}

export function loginAction(username, password) {
  return (dispatch, getState) => {
    dispatch(loginClearAction());
    dispatch(loginLoadAction());
    dispatch(loginCheckerAction({ username, password }));
    if (_.isEmpty(getState().auth.errors)) {
      loginAPI({ username, password }).then((res) => {
        const { data } = res;
        if (data.status_code === 200) {
          const token = {
            refresh: data.refresh,
            access: data.access,
          };
          dispatch(loginSuccessAction(token));
        } else {
          dispatch(loginFailAction(data.detail));
        }
      });
    } else {
      dispatch(loginUnloadAction());
    }
  };
}

export function logoutAction() {
  return {
    type: LOGOUT,
  };
}
