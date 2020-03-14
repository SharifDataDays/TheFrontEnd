import axios from 'axios';
import BASE_ADDR from '.';

const HOME = `${BASE_ADDR}/`;
const STAFF = `${BASE_ADDR}/staff/`;

export function subscribeAPI() {
  return `${BASE_ADDR}/subscribe/email/`;
}

export default function homeAPI() {
  return axios.get(HOME);
}

export function staffAPI() {
  return axios.get(STAFF);
}

const RANDOM_PRIZE = (token) => `${BASE_ADDR}/rrank/${token}/`;

export function randomPrizeAPI(token, data) {
  console.log(data)
  return axios.post(RANDOM_PRIZE(token), data);
}
