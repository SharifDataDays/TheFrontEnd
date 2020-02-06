import { TEAM_FINAL, TEAM_CLEAR, TEAM_FAIL, TEAM_SUCCESS } from '../actions/team';
import initialState from '../store/initialState';
import produce from 'immer';

function teamClearReducer(state = initialState.team, action) {
  return produce(state, (draft) => {
    draft.success = false;
    draft.fail = false;
    draft.errors = {};
    return draft;
  });
}

function teamFailReducer(state = initialState.team, action) {
  return produce(state, (draft) => {
    const { errors } = action.payload;
    draft.fail = true;
    draft.success = false;
    draft.errors = errors;
    return draft;
  });
}

function teamSuccessReducer(state = initialState.team, action) {
  return produce(state, (draft) => {
    draft.fail = false;
    draft.success = true;
    draft.error = {};
    return draft;
  });
}


function teamFinalizeReducer(state = initialState.team, action) {
  return produce(state, (draft) => {
    draft.finalized = true;
    return draft;
  });
}

export default function teamReducers(state = initialState.team, action) {
    switch (action.type) {
        case TEAM_FINAL:
          return teamFinalizeReducer(state, action);
        case TEAM_SUCCESS:
          return teamSuccessReducer(state, action);
        case TEAM_CLEAR:
          return teamClearReducer(state, action);
        case TEAM_FAIL:
          return teamFailReducer(state, action);
        default:
          return state;
      }
}
