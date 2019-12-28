import _ from 'lodash';
import axios from 'axios';
import { loginAPI } from '../api/auth';
import {
  LOGIN_REMOVE_ERROR,
  LOGIN_LOAD,
  LOGIN_UNLOAD,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_CHECK,
  LOGOUT,
} from '../constants/auth';

function loginRemoveErrorsAction() {
  return {
    type: LOGIN_REMOVE_ERROR,
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
    dispatch(loginRemoveErrorsAction());
    dispatch(loginLoadAction());
    dispatch(loginCheckerAction({ username, password }));
    if (_.isEmpty(getState().auth.errors)) {
      axios.post(loginAPI(), { username, password }).then((res) => {
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
