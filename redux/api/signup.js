import axios from 'axios';
import BASE_ADDR from '.';

const GET_UNIS = `${BASE_ADDR}/accounts/university/`;

const SIGNUP_API = `${BASE_ADDR}/accounts/signup/`;

export function getUnisAPI() {
  return axios.get(GET_UNIS, {
    headers: {
      'Accept-Language': 'fa',
    },
  });
}

export function addUniAPI(data) {
  return axios.post(GET_UNIS, data, {
    headers: {
      'Accept-Language': 'fa',
    },
  });
}

export function signupAPI(data) {
  return axios.post(SIGNUP_API, data, {
    headers: {
      'Accept-Language': 'fa',
    },
  });
}
