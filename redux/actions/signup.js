import { signupRequest } from '../api/signup';

export const CLEAR_SIGNUP = 'SIGNUP_CLEAR'
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_REQ_ERROR = 'SIGNUP_REQ_ERROR';

export function clearSignup() {
  return {
    type : CLEAR_SIGNUP
  }
}

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
      console.log(res.data)
      if (res.status_code === 200) {
          dispatch(signupSucces())
      } else {
          dispatch(signupError(res.data.error))
      }
    });
  };
}
