import _ from 'lodash';
import produce from 'immer';
import { CHANGE_ANSWER, TRIAL_FAIL, TRIAL_CLEAR, TRIAL_SUCCESS } from '../actions/trials';
import initialState from '../store/initialState';

function trialSuccessReducer(state = initialState.trials, action) {
  return produce(state, (draft) => {
    draft.fail = false;
    draft.success = true;
    draft.error = {};
    return draft;
  });
}

function trialFailReducer(state = initialState.trials, action) {
  return produce(state, (draft) => {
    const { errors } = action.payload;
    draft.fail = true;
    draft.success = false;
    draft.errors = errors;

    console.log('ERRR');
    console.log(errors);

    let fa = '';
    if (!_.isUndefined(draft.errors.question_submissions)) {
      fa = 'فیلد نباید خالی باشد';
    }

    draft.errors.fa = fa;

    return draft;
  });
}

function trialClearReducer(state = initialState.trials, action) {
  return produce(state, (draft) => {
    draft.success = false;
    draft.fail = false;
    draft.errors = {};

    const { clearAnswers } = action.payload;
    if (clearAnswers) draft.answers = {};

    return draft;
  });
}

function changeAnswerReducer(state = initialState.trials, action) {
  return produce(state, (draft) => {
    console.log('DRAFT');
    console.log(draft);
    let answers = draft.answers;
    const { id, qtype, count, number, value } = action.payload.answer;
    _.set(answers, `i${id}.count`, count);
    _.set(answers, `i${id}.qtype`, qtype);
    const currentValue = _.get(answers, `i${id}.n${number}`);
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
    _.set(answers, `i${id}.n${number}`, newValue);
    draft.answers = answers;
    return draft;
  });
}

function trialsReducers(state = initialState.trials, action) {
  switch (action.type) {
    case CHANGE_ANSWER:
      return changeAnswerReducer(state, action);
    case TRIAL_CLEAR:
      return trialClearReducer(state, action);
    case TRIAL_FAIL:
      return trialFailReducer(state, action);
    case TRIAL_SUCCESS:
      return trialSuccessReducer(state, action);
    default:
      return state;
  }
}

export default trialsReducers;
