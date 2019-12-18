import produce from 'immer';
import { CHANGE_ANSWER } from '../constants/answers';
import initialState from '../store/initialState';

export function changeAnswerReducer(state = initialState.answers, action) {
  return produce(state, (draft) => {
    const { question, value } = action.payload;
    draft[question] = value;
    return draft;
  });
}

function answersReducers(state = initialState.answers, action) {
  switch (action.type) {
    case CHANGE_ANSWER:
      return changeAnswerReducer(state, action);
    default:
      return state;
  }
}

export default answersReducers;
