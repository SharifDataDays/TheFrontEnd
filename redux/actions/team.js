import _ from 'lodash';
import { pageLoadingAction } from './page';
import { updateTeamNameAPI, inviteUserAPI } from '~/redux/api/team';

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
  console.log(errors)
  return {
    type: TEAM_FAIL,
    payload: {
      errors,
    },
  };
}

export function teamNameUpdateAction(fields, token) {
  return (dispatch, getState) => {
    dispatch(pageLoadingAction(true));
    if (_.isUndefined(fields.name) || fields.name === '') {
      dispatch(teamFailAction);
    } else {
      updateTeamNameAPI(fields.contest, fields, token).then((res) => {
        const { data } = res;
        if (data.status_code === 200) {
          dispatch(teamSuccessAction());
        } else {
          dispatch(teamFailAction(data.detail));
        }
      });
    }
    dispatch(pageLoadingAction(false));
  };
}

export function addMemberAction(fields, token) {
  console.log(fields);
  console.log(token);
  return (dispatch, getState) => {
    dispatch(pageLoadingAction(true));
    inviteUserAPI(fields.contest_id, fields, token).then((res) => {
      const { data } = res;
      console.log(data);
      if (data.status_code === 200) {
        dispatch(teamSuccessAction());
      } else {
        dispatch(teamFailAction(data.detail));
      }
    });
    dispatch(pageLoadingAction(false));
  };
}

export function answerInvitationAction(fields, token) {}

export function finalizeTeamAction(fields, token) {}
