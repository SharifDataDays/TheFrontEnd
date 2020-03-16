import axios from 'axios';
import BASE_ADDR from '.';

// /contest/
//     GET, contests list

// /contest/<c_id>/
//     GET, contest and its milestones list

// /contest/<c_id>/milestone/<m_id>/
//     GET, milestone and its tasks list each with its trials

// /contest/c_id>/milestone/<m_id>/task/<t_id>/
//     GET, task and its trials list
//     POST, get new trial
//     PUT, content finished

// /contest/<c_id>/milestone/<m_id>/task/<t_id>/trial/<tr_id>/
//     GET, show trial and its questions
//     POST, submit trial

const PROFILE = `${BASE_ADDR}/accounts/profile/`;
const PASSWORD_RESET = `${BASE_ADDR}/accounts/password/change/`;

const CONTENT = (id) => `${BASE_ADDR}/resources/${id}/`;

const CONTENT_LIST = `${BASE_ADDR}/resources/`;

const ALL_CONTESTS = `${BASE_ADDR}/contest/`;
const CONTEST = (contestID) => `${BASE_ADDR}/contest/${contestID}/`;

const PASSWORD_RESET_API = `${BASE_ADDR}/accounts/password/change/`;
const TRIALSLIST = (contestID, milestoneID, taskID) =>
  `${BASE_ADDR}/contest/${contestID}/${milestoneID}/${taskID}/trials`;

const MILESTONE = (contestID, milestoneID) =>
  `${BASE_ADDR}/contest/${contestID}/milestone/${milestoneID}/`;

const TASK = (contestId, milestoneId, taskId) =>
  `${BASE_ADDR}/contest/${contestId}/milestone/${milestoneId}/task/${taskId}/`;

const TRIAL = (contestID, milestoneID, taskId, trialId) =>
  `${BASE_ADDR}/contest/${contestID}/milestone/${milestoneID}/task/${taskId}/trial/${trialId}/`;

const TEAM_NAME = `${BASE_ADDR}/participation/teams/`;

export function getTeamNameAPI(token) {
  return axios.get(TEAM_NAME, {
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

export function allContestsAPI(token) {
  return axios.get(ALL_CONTESTS, {
    headers: {
      withCredentials: true,
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

export function contentListAPI(token) {
  return axios.get(CONTENT_LIST, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function contentAPI(id, token) {
  return axios.get(CONTENT(id), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function taskAPI(contestId, milestoneId, taskId, token) {
  return axios.get(TASK(contestId, milestoneId, taskId), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getNewTrialAPI(token, contestId, milestoneId, taskId) {
  return axios.post(
    TASK(contestId, milestoneId, taskId),
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
}

export function contentFinished(contestId, milestoneId, taskId, token) {
  return axios.put(
    TASK(contestId, milestoneId, taskId),
    {},
    {
      headers: {
        withCredentials: true,
        Authorization: `Bearer ${token}`,
      },
    },
  );
}

export function getTrialAPI(token, contestId, milestoneId, taskId, trialId) {
  return axios.get(TRIAL(contestId, milestoneId, taskId, trialId), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function trialsListAPI(contestID, milestoneID, token) {
  return axios.get(TRIALSLIST(contestID, milestoneID), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function submitTrialAPI(data, token, contestId, milestoneId, taskId, trialId) {
  return axios.post(TRIAL(contestId, milestoneId, taskId, trialId), data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

const SCOREBOARD_BASE_ADD = 'http://datadays.ir/scoreboard-api';
const SCOREBOARD = (start_index, end_index, ms_id) =>
  `${SCOREBOARD_BASE_ADD}/scoreboard/?start_index=${start_index}&end_index=${end_index}&ms_id=${ms_id}`;

const TEAMCOUNT = (ms_id) => `${SCOREBOARD_BASE_ADD}/milestone_info/?ms_id=${ms_id}`;

export function teamCountAPI(milestoneID, token) {
  return axios.get(TEAMCOUNT(milestoneID), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
export function scoreboardAPI(startIndex, endIndex, milestoneID, token) {
  // console.log(SCOREBOARD(startIndex, endIndex, milestoneID));
  return axios.get(SCOREBOARD(startIndex, endIndex, milestoneID), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
