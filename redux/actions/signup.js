import { signupRequest } from '../api/signup';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCES = 'SIGNUP_SUCCES';
export const SIGNUP_REQ_ERROR = 'SIGNUP_REQ_ERROR';

function signupRequestSent() {
  return {
    type: SIGNUP_REQUEST,
  };
}
function signupSucces() {
  return {
    type: SIGNUP_SUCCES,
  };
}
function signupError(error) {
  return {
    type: SIGNUP_REQ_ERROR,
    error,
  };
}

export function signup(data) {
  return (dispatch) => {
    dispatch(signupRequestSent());
    signupRequest(data).then((res) => {
      if (res.status_code === 200) {
          dispatch(signupSucces())
      } else {
          dispatch(signupError())
      }
    });
  };
}
