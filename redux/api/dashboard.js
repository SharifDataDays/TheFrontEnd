import axios from 'axios';
import BASE_ADDR from '.';

const PROFILE_API = `${BASE_ADDR}/accounts/profile`;

export function profileUpdateAPI(data, token) {
  return axios.put(PROFILE_API, data, {
    headers: {
      'Accept-Language': 'fa',
      Authorization: `Bearer ${token}`,
    },
  });
}

export function profileAPI(token) {
  return axios.get(PROFILE_API, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

const TASK = (id) => `${BASE_ADDR}/resources/${id}`;
const TASK_LIST = `${BASE_ADDR}/resources`;

export function taskListAPI(token) {
  return axios.get(TASK_LIST, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function taskAPI(id, token) {
  return axios.get(TASK(id), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

const CONTEST = (id) => `${BASE_ADDR}/contest/${id}`;
const MILESTONE = (contestID, milestoneID) => `${BASE_ADDR}/contest/${contestID}/${milestoneID}/`;

export function contestAPI(contestId, token) {
  return axios.get(CONTEST(contestId), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function milestoneAPI(contestID, milestoneID, token) {
  return axios.get(MILESTONE(contestID, milestoneID), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
