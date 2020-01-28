import axios from 'axios';
import BASE_ADDR from '.';

const LOGIN = `${BASE_ADDR}/accounts/login/`;
const AUTH = `${BASE_ADDR}/accounts/profile/`;
const FORGOT = `${BASE_ADDR}/accounts/password/reset/`;
const RESET = `${BASE_ADDR}/accounts/password/reset/confirm/`;

export function loginAPI(data) {
  return axios.post(LOGIN, data);
}

export function authAPI(token) {
  return axios.get(AUTH, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function forgotAPI(email) {
  return axios.post(FORGOT, {email});
}

export function resetAPI(data) {
  return axios.post(RESET, data);
}
