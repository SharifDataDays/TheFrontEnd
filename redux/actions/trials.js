export const CHANGE_ANSWER = 'CHANGE_ANSWER';
export const SUBMIT_ANSWERS = 'SUBMIT_ANSWERS';

export function changeAnswerAction(answer) {
  return {
    type: CHANGE_ANSWER,
    payload: {
      answer,
    },
  };
}

export function submitAnswersAction() {
  return {
    type: SUBMIT_ANSWERS,
  };
}
