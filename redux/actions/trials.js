export const CHANGE_ANSWER = 'CHANGE_ANSWER';
export const SUBMIT_ANSWERS = 'SUBMIT_ANSWERS';

export function changeAnswerAction(id, newAnswer) {
  return {
    type: CHANGE_ANSWER,
    payload: {
      id,
      newAnswer,
    },
  };
}

export function submitAnswersAction() {}
