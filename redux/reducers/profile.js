import { PROFILE_CHECK, PROFILE_SUCCESS, PROFILE_FAIL } from '../actions/profile';
import initialState from '../store/initialState';
import produce from 'immer';

function profileCheckerReducer(state = initialState.profile, action) {
  return produce(state, (draft) => {
    const { fields } = action.payload;
    // todo
  });
}

// todo
function profileFailReducer(state = initialState.profile, action) {}

// todo
function profileSuccessReducer(state = initialState.profile, action) {}

export default function profileReducers(state = initialState.profile, action) {
  switch (action.type) {
    case PROFILE_CHECK:
      return profileCheckerReducer(state, action);
    case PROFILE_FAIL:
      return profileFailReducer(state, action);
    case PROFILE_SUCCESS:
      return profileSuccessReducer(state, action);
    default:
      return state;
  }
}
