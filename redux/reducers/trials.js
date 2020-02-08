import _ from 'lodash';
import produce from 'immer';
import { CHANGE_ANSWER, TRIAL_FAIL } from '../actions/trials';
import initialState from '../store/initialState';

function changeAnswerReducer(state = initialState.trials, action) {
  return produce(state, (draft) => {
    const { id, qtype, count, number, value } = action.payload.answer;
    _.set(draft, `i${id}.count`, count);
    _.set(draft, `i${id}.qtype`, qtype);
    const currentValue = _.get(draft, `i${id}.n${number}`);
    let newValue;
    if (qtype === 'single_select') {
      newValue = [value];
    } else if (qtype === 'multi_select') {
      if (currentValue) {
        newValue = _.includes(currentValue, value)
          ? _.filter(currentValue, (choice) => choice !== value)
          : _.concat(currentValue, value);
      } else {
        newValue = [value];
      }
    } else {
      newValue = value;
    }
    _.set(draft, `i${id}.n${number}`, newValue);
    return draft;
  });
}

function trialsReducers(state = initialState.trials, action) {
  switch (action.type) {
    case CHANGE_ANSWER:
      return changeAnswerReducer(state, action);
    case TRIAL_FAIL:
      return trialFailReducer(state, action)
    default:
      return state;
  }
}


function trialFailReducer(state = initialState.trials, action) {
  return produce(state, (draft) => {
    const { errors } = action.payload;
    draft.fail = true;
    draft.success = false;
    draft.errors = errors;
    return draft;
  });
}

export default trialsReducers;
