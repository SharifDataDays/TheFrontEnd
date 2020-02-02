import axios from 'axios';
import BASE_ADDR from '.';

const HOME = `${BASE_ADDR}/`;

export function subscribeAPI() {
  return `${BASE_ADDR}/subscribe/email/`;
}

export default function homeAPI() {
  return axios.get(HOME);
}
