import { LOGIN, LOGOUT } from '../constants/auth';

export function loginAction(username, password) {
  return {
    type: LOGIN,
    payload: {
      username,
      password,
    },
  };
}

export function logoutAction() {
  return {
    type: LOGOUT,
  };
}
