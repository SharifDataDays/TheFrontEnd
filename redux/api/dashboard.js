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

const CONTENT_FINISHED = (content_id, milestone_id, task_id) =>
  `${BASE_ADDR}/contest/${content_id}/${milestone_id}/${task_id}/content_finished/`

export function contentFinished(content_id, milestone_id, task_id) {
  return axios.get(CONTENT_FINISHED(content_id, milestone_id, task_id));
}
