import axios from 'axios';
import BASE_ADDR from '.';

export function authAPI() {
  return `${BASE_ADDR}/accounts/profile`;
}

const LOGIN_API = `${BASE_ADDR}/accounts/login`;

export function loginAPI(data) {
  return axios.post(LOGIN_API, data);
}

export function forgotAPI() {
  return `${BASE_ADDR}/accounts/password/reset/`;
}

export function resetAPI() {
  return `${BASE_ADDR}/accounts/password/reset/confirm/`;
}

export function refreshAPI() {
  return `${BASE_ADDR}/accounts/refresh`;
}
