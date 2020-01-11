import axios from 'axios';
import BASE_ADDR from '.';

export function profileAPI() {
  return `${BASE_ADDR}/accounts/profile`;
}

const TASK = (id) => `${BASE_ADDR}/resources/${id}`;
const TASK_LIST = `${BASE_ADDR}/resources`;
const SUBMIT_TRIAL = (contestId, milestoneId, taskId, trialId) =>
  `http://37.152.190.92/test/api/contest/${contestId}/${milestoneId}/${taskId}/${trialId}`;

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
  return axios.post(SUBMIT_TRIAL(contestId, milestoneId, taskId, trialId), {
    data,
    headers: {
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTc4NzM1NTgyLCJqdGkiOiI0ZjUwZjI3MzU5MTA0YTFiYjU2NmU1Yjc0NDk0NTQ2ZCIsInVzZXJfaWQiOjJ9.oAHTLQxp3HhfPBz1IYefk8H5J5PaAr6wCbN1q9pNHlM`,
    },
  });
}
