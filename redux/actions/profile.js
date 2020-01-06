import _ from 'lodash';
import { pageLoadingAction } from './page';
import { profileUpdateAPI } from '../api/dashboard';

export const PROFILE_CHECK = 'PROFILE_CHECK';
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS';
export const PROFILE_FAIL = 'PROFILE_FAIL';

export function profileCheckerAction(fields) {
  return {
    type: PROFILE_CHECK,
    payload: {
      fields,
    },
  };
}

export function profileSuccessAction() {
  return {
    type: PROFILE_SUCCESS,
  };
}

export function profileFailAction(errors) {
  return {
    type: PROFILE_FAIL,
    payload: {
      errors,
    },
  };
}

export function profileUpdateAction(fields, token) {
  return (dispatch, getState) => {
    dispatch(pageLoadingAction(true));
    dispatch(profileCheckerAction(fields));
    if (_.isEmpty(getState().profile.errors)) {
      profileUpdateAPI(fields, token).then((res) => {
        const { data } = res;
        if (data.status_code === 200) {
          dispatch(profileSuccessAction());
        } else {
          dispatch(profileFailAction(data.detail));
        }
      });
    }
    dispatch(pageLoadingAction(false));
  };
}
