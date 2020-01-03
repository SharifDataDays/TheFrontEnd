import produce from 'immer';
import { CHANGE_ANSWER, SUBMIT_ANSWERS } from '../actions/trials';
import initialState from '../store/initialState';

function changeAnswerReducer(state = initialState.trials, action) {
  return produce(state, (draft) => {
    const { id, newAnswer } = action.payload;
    const newAnswers = {
      ...JSON.parse(draft.answers),
      id: newAnswer,
    };
    draft.answers = JSON.stringify(newAnswers);
    return draft;
  });
}

function submitAnswersReducer(state = initialState.trials, action) {
  return produce(state, (draft) => {
    return draft;
  });
}

function trialsReducers(state = initialState.trials, action) {
  switch (action.type) {
    case CHANGE_ANSWER:
      return changeAnswerReducer(state, action);
    case SUBMIT_ANSWERS:
      return submitAnswersReducer(state, action);
    default:
      return state;
  }
}

export default trialsReducers;
