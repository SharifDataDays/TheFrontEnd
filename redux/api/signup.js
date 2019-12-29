import axios from 'axios';
import BASE_ADDR from '.';

const SIGNUP_API = `${BASE_ADDR}/accounts/signup`;

export function signupAPI(data) {
  return axios.post(SIGNUP_API, data);
}
