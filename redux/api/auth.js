import axios from 'axios';
import BASE_ADDR from '.';

const LOGIN = `${BASE_ADDR}/accounts/login`;
const AUTH = `${BASE_ADDR}/accounts/profile`;
const REFRESH = `${BASE_ADDR}/accounts/refresh`;

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

export function refreshAPI(token) {
  return axios.post(REFRESH, {
    refresh: token.refresh,
  });
}

export function forgotAPI() {
  return `${BASE_ADDR}/accounts/password/reset/`;
}

export function resetAPI() {
  return `${BASE_ADDR}/accounts/password/reset/confirm/`;
}
