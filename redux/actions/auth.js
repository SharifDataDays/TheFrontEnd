import axios from 'axios';
import { loginAPI } from '../api/auth';
import { LOGIN_LOAD, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../constants/auth';

function loginLoadAction() {
  return {
    type: LOGIN_LOAD,
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

function loginFailAction(error) {
  return {
    type: LOGIN_FAIL,
    payload: {
      error,
    },
  };
}

export function loginAction(username, password) {
  return (dispatch, getState) => {
    dispatch(loginLoadAction());
    return axios.post(loginAPI(), { username, password }).then((res) => {
      const { data } = res;
      if (data.status_code === 200) {
        const token = {
          refresh: res.refresh,
          access: res.access,
        };
        dispatch(loginSuccessAction(token));
      } else {
        dispatch(loginFailAction(data.detail));
      }
    });
  };
}

export function logoutAction() {
  return {
    type: LOGOUT,
  };
}
