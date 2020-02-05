import axios from 'axios';
import BASE_ADDR from '.';


// const TEAM = (cid) => `${BASE_ADDR}/participation/${cid}/team/`;
const TEAM = (cid) => `http://81.31.170.5/test/api/participation/${cid}/team/`;
// const INVITATION = (cid) => `${BASE_ADDR}/participation/${cid}/invite`;
const INVITATION = (cid) => `http://81.31.170.5/test/api/participation/${cid}/invite`;

export function getTeamInfoAPI(cid, token){
  return axios.get(TEAM(cid), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function updateTeamNameAPI(cid, data, token){
  return axios.put(TEAM(cid), data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getInvitationsAPI(cid, token) {
  return axios.get(INVITATION(cid), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function inviteUserAPI(cid, data, token) {
  return axios.post(INVITATION(cid), data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function answerInvitationAPI(cid, data, token) {
  return axios.put(INVITATION(cid), data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
