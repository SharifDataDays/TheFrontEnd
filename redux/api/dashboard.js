import axios from 'axios';
import BASE_ADDR from '.';

export function profileAPI() {
  return `${BASE_ADDR}/accounts/profile/`;
}

const TASK = (id) => `${BASE_ADDR}/resources/${id}/`;
const TASK_LIST = `${BASE_ADDR}/resources/`;
const SUBMIT_TRIAL = (contestId, milestoneId, taskId, trialId) =>
  `http://81.31.170.5/api/contest/${contestId}/${milestoneId}/${taskId}/${trialId}/`;

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

export function submitTrialAPI(data, token, contestId, milestoneId, taskId, trialId) {
  return axios.post(SUBMIT_TRIAL(contestId, milestoneId, taskId, trialId), data, {
    headers: {
      withCredentials: true,
      Authorization: `Bearer ${token}`,
    },
  });
}
