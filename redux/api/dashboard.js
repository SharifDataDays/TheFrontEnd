import axios from 'axios';
import BASE_ADDR from '.';

export function profileAPI() {
  return `${BASE_ADDR}/accounts/profile`;
}

const TASK = (id) => `${BASE_ADDR}/resources/${id}`;
const TASK_LIST = `${BASE_ADDR}/resources`;

export function taskListAPI(token) {
  return axios.get(TASK_LIST, {
    headers: {
      Authorization: `Bearer ${token.access}`,
    },
  });
}

export function taskAPI(id, token) {
  return axios.get(TASK(id), {
    headers: {
      Authorization: `Bearer ${token.access}`,
    },
  });
}
