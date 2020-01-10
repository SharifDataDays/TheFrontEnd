import _ from 'lodash';
import produce from 'immer';
import { CHANGE_ANSWER } from '../actions/trials';
import initialState from '../store/initialState';

function changeAnswerReducer(state = initialState.trials, action) {
  return produce(state, (draft) => {
    const { id, qtype, number, value } = action.payload.answer;
    const currentValue = _.get(draft, `i${id}.n${number}.value`);
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
    _.set(draft, `i${id}.n${number}`, { value: newValue, qtype });
    return draft;
  });
}

function trialsReducers(state = initialState.trials, action) {
  switch (action.type) {
    case CHANGE_ANSWER:
      return changeAnswerReducer(state, action);
    default:
      return state;
  }
}

export default trialsReducers;
