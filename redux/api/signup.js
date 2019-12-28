import axios from 'axios'
import BASE_ADDR from './index';

export function signupAPI() {
  return `${BASE_ADDR}/accounts/signup`;
}

export function signupRequest(data) {
  return axios.post(signupAPI(), data)
}
