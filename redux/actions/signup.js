import _ from 'lodash';
import { signupAPI } from '../api/signup';
import { pageLoadingAction } from './page';

export const SIGNUP_CLEAR = 'SIGNUP_CLEAR';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const SIGNUP_CHECK = 'SIGNUP_CHECK';

export function signupClearAction() {
  return {
    type: SIGNUP_CLEAR,
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
    dispatch(pageLoadingAction(true));
    dispatch(signupClearAction());
    dispatch(signupCheckerAction(fields));
    if (_.isEmpty(getState().signup.errors)) {
      signupAPI(fields).then((res) => {
        const { data } = res;
        if (data.status_code === 200) {
          dispatch(signupSuccessAction());
          dispatch(pageLoadingAction(false));
        } else {
          dispatch(signupFailAction(data.detail));
          dispatch(pageLoadingAction(false));
        }
      });
    } else {
      dispatch(pageLoadingAction(false));
    }
  };
}
