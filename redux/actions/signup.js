import _ from 'lodash';
import { signupAPI } from '../api/signup';

export const SIGNUP_CLEAR = 'SIGNUP_CLEAR';
export const SIGNUP_LOAD = 'SIGNUP_LOAD';
export const SIGNUP_UNLOAD = 'SIGNUP_UNLOAD';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const SIGNUP_CHECK = 'SIGNUP_CHECK';

function signupClearAction() {
  return {
    type: SIGNUP_CLEAR,
  };
}

function signupLoadAction() {
  return {
    type: SIGNUP_LOAD,
  };
}

function signupUnloadAction() {
  return {
    type: SIGNUP_LOAD,
  };
}

function signupSuccessAction() {
  return {
    type: SIGNUP_SUCCESS,
  };
}
function signupFailAction(errors) {
  return {
    type: SIGNUP_FAIL,
    payload: {
      errors,
    },
  };
}

export function signupCheckerAction(fields) {
  return {
    type: SIGNUP_CHECK,
    payload: {
      fields,
    },
  };
}

export function signupAction(fields) {
  return (dispatch, getState) => {
    dispatch(signupClearAction());
    dispatch(signupLoadAction());
    dispatch(signupCheckerAction(fields));
    if (_.isEmpty(getState().signup.errors)) {
      signupAPI(fields).then((res) => {
        const { data } = res;
        if (data.status_code === 200) {
          dispatch(signupSuccessAction());
        } else {
          dispatch(signupFailAction(data.detail));
        }
      });
    } else {
      dispatch(signupUnloadAction());
    }
  };
}
