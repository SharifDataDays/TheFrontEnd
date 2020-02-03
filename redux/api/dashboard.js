import axios from 'axios';
import BASE_ADDR from '.';

const PROFILE = `${BASE_ADDR}/accounts/profile/`;
const TASK = (id) => `${BASE_ADDR}/resources/${id}/`;
const TASK_LIST = `${BASE_ADDR}/resources/`;
const ALL_CONTESTS = `${BASE_ADDR}/contest/contests/`;
const CONTEST = (contestID) => `${BASE_ADDR}/contest/${contestID}/`;
const MILESTONE = (contestID, milestoneID) => `${BASE_ADDR}/contest/${contestID}/${milestoneID}/`;
const PASSWORD_RESET= `${BASE_ADDR}/accounts/password/change/`;

//const TEAM = `${BASE_ADDR}/participation/2/team/`;
const TEAM = `http://81.31.170.5/test/api/participation/2/team/`

export function getTeamInfoAPI(token){
  return axios.get(TEAM, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function changeTeamName(data, token){
  return axios.put(TEAM, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}


export function passwordUpdateAPI(data, token) {
  return axios.post(PASSWORD_RESET, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
export function profileUpdateAPI(data, token) {
  return axios.put(PROFILE, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function profileAPI(token) {
  return axios.get(PROFILE, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

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

export function allContestsAPI(token) {
  return axios.get(ALL_CONTESTS, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

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

const CONTENT_FINISHED = (content_id, milestone_id, task_id) =>
  `${BASE_ADDR}/contest/${content_id}/${milestone_id}/${task_id}/content_finished/`;

export function contentFinished(content_id, milestone_id, task_id) {
  return axios.get(CONTENT_FINISHED(content_id, milestone_id, task_id));
}
