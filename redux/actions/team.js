import _ from 'lodash';
import { pageLoadingAction } from './page';
import { inviteUserAPI, answerInvitationAPI, updateTeamName } from '../api/dashboard';

export const TEAM_CHECK = 'TEAM_CHECK';
export const TEAM_SUCCESS = 'TEAM_SUCCESS';
export const TEAM_FAIL = 'TEAM_FAIL';
export const TEAM_CLEAR = 'TEAM_CLEAR';


export function teamClearAction() {
  return {
    type: TEAM_CLEAR,
  };
}

export function teamSuccessAction() {
  return {
    type: TEAM_SUCCESS,
  };
}

export function teamFailAction(errors) {
  return {
    type: TEAM_FAIL,
    payload: {
      errors,
    },
  };
}

export function teamNameUpdateAction(fields, token){

}

export function addMemberAction(fields, token){

}

export function answerInvitationAction(fields, token){

}

export function finalizeTeamAction(fields, token){

}