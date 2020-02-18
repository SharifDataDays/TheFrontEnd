import _ from 'lodash';
import { submitTrialAPI } from '../api/dashboard';
import { pageLoadingAction } from './page';

export const CHANGE_ANSWER = 'CHANGE_ANSWER';
export const TRIAL_CLEAR = 'TRIAL_CLEAR';
export const TRIAL_FAIL = 'TRIAL_FAIL';
export const TRIAL_SUCCESS = 'TRIAL_SUCCESS';

export function trialFailAction(errors) {
  return {
    type: TRIAL_FAIL,
    payload: {
      errors,
    },
  };
}
export function trialSuccessAction() {
  return {
    type: TRIAL_SUCCESS,
  };
}

export function trialClearAction(clearAnswers) {
  return {
    type: TRIAL_CLEAR,
    payload: {
      clearAnswers,
    },
  };
}

export function changeAnswerAction(answer) {
  return {
    type: CHANGE_ANSWER,
    payload: {
      answer,
    },
  };
}

function mapStateToSubmission(state, trialId, final) {
  const data = new FormData();

  _.forEach(state, (value, key) => {
    const { qtype, n0 } = value;
    console.log('KKKK');
    console.log(value, key);
    const id = _.join(_.tail(_.split(key, '')), '');
    if (qtype === 'file_upload') {
      data.append(id, n0);
      console.log('IDD');
      console.log(n0);
      console.log(data);
    }
  });

  const answers = _.reduce(
    state,
    (result, value, key) => {
      const { count, qtype } = value;
      const id = Number(_.join(_.tail(_.split(key, '')), ''));
      const hasFile = qtype === 'file_upload';
      const answer =
        qtype !== 'file_upload'
          ? JSON.stringify(
              _.reduce(
                _.range(count),
                (ans, val) => {
                  return _.concat(ans, _.get(value, `n${val}`, undefined));
                },
                [],
              ),
            )
          : ['NOTHING'];
      return _.concat(result, {
        id,
        answer,
        type: qtype,
        has_file: hasFile,
      });
    },
    [],
  );
  data.append(
    'json',
    JSON.stringify({
      id: trialId,
      question_submissions: answers,
      final_submit: final,
    }),
  );
  let fixedJson = data
    .get('json')
    .split('\\"')
    .join('"')
    .split('"[')
    .join('[')
    .split(']"')
    .join(']');
  data.delete('json');
  data.append('json', fixedJson);
  console.log(data.get('json'));
  console.log('FIXEDJSON');
  console.log(fixedJson);
  return data;
}

function checkFields(questions, answers) {
  console.log(questions);
  console.log(answers);
  let fine = true;
  _.each(questions, (value) => {
    if (_.isUndefined(answers['i' + value.id])) fine = false;
  });
  return fine;
}

export function submitAnswersAction(
  token,
  contestId,
  milestoneId,
  taskId,
  trialId,
  final,
  questions,
) {
  return (dispatch, getState) => {
     dispatch(pageLoadingAction(true));

    const answers = mapStateToSubmission(getState().trials.answers, trialId, final);
    if (!checkFields(questions, getState().trials.answers)) {
      dispatch(trialFailAction({ error: 'Must complete all fields' }));
    } else {
      submitTrialAPI(answers, token, contestId, milestoneId, taskId, trialId).then((res) => {
        console.log('SUBMIT');
        console.log(res.data);
        if (!_.isUndefined(res.data.status_code) && res.data.status_code !== 200) {
          dispatch(trialFailAction(res.data));
        } else {
          dispatch(trialSuccessAction());
        }
      });
    }
     dispatch(pageLoadingAction(false));
  };
}
