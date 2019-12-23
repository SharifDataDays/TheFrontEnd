import { CHANGE_ANSWER } from '../constants/answers';

export function changeAnswerAction(question, value) {
  return {
    type: CHANGE_ANSWER,
    payload: {
      question,
      value,
    },
  };
}
