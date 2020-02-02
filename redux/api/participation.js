import axios from 'axios';
import BASE_ADDR from '.';

const TEAM_API = (cid) => `${BASE_ADDR}/participation/${cid}/team/`;
const INVITE_API = (cid) => `${BASE_ADDR}/participation/${cid}/invite`;

export function getTeamAPI(cid, token) {
  return axios.get(TEAM_API(cid), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function updateTeamAPI(cid, data, token) {
  return axios.put(TEAM_API(cid), data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getInvitationsAPI(cid, token) {
  return axios.get(INVITE_API(cid), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function inviteUserAPI(cid, data, token) {
  return axios.post(INVITE_API(cid), data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function answerInvitationAPI(cid, data, token) {
  return axios.put(INVITE_API(cid), data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
