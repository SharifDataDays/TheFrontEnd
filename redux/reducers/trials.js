import _ from 'lodash';
import produce from 'immer';
import { CHANGE_ANSWER, TRIAL_FAIL, TRIAL_CLEAR, TRIAL_SUCCESS } from '../actions/trials';
import initialState from '../store/initialState';

function trialSuccessReducer(state = initialState.trials, action) {
  return produce(state, (draft) => {
    const { final } = action.payload;

    draft.finalize = final;
    draft.fail = false;
    draft.success = true;
    draft.errors = {};
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
    console.log(errors.detail);
    console.log(errors.detail === 'This trial has already been submitted.');
    let fa = '';
    draft.errors.fa = 'خطا در ارسال پاسخ';

    if (errors.detail === 'This trial has already been submitted.') {
      fa = 'این آزمون ثبت نهایی شده است.';
      draft.errors.fa = fa;
    } else if (errors.error === 'Must complete all fields') {
      fa = 'لطفا همه‌ی پاسخ‌ها را ارسال کنید.';
      draft.errors.fa = fa;
    } else if (!_.isUndefined(errors.question_submissions)) {
      fa = 'لطفا همه‌ی پاسخ‌ها را ارسال کنید.';
      draft.errors.fa = fa;
    } else if (!_.isUndefined(errors.errors)) {
      console.log('ENNN');

      _.mapKeys(errors.errors, (value, key) => {
        console.log(value);
        console.log(key);
        console.log(_.split(value));
        fa = '';
        if (_.startsWith(value, 'File uploaded format is invalid')) {
          fa = 'فرمت فایل ارسالی نادرست است.';
        } else if (_.startsWith(value, 'File size is too much')) {
          fa = 'حجم فایل ارسالی بیشتر از حد مجاز است.';
        } else if (_.startsWith(value, 'Entered range should contain numbers only')) {
          fa = 'مقدار ارسال شده باید یک عدد باشد.';
        } else if (_.startsWith(value, "Entered range isn't a valid numeric range")) {
          fa = 'مقدار ارسال شده باید یک عدد باشد.';
        } else if (_.startsWith(value, 'You should select maximum of')) {
          fa = 'تعداد گزینه‌های انتخابی بیش‌تر از حد مجاز است.';
        } else if (_.startsWith(value, 'You should choose only one answer')) {
          fa = 'فقط مجاز به انتخاب یک گزینه هستید.';
        } else if (_.startsWith(value, 'Answer type should be')) {
          fa = 'فرمت جواب نادرست است';
        } else if (_.startsWith(value, 'This question answer should be list')) {
          fa = 'فرمت جواب نادرست است';
        } else if (_.startsWith(value, 'Single answer should have only one answer, no more')) {
          fa = 'فقط مجاز به ارسال یک جواب هستید.';
        } else if (_.startsWith(value, 'You should submit maximum of ')) {
          fa = 'تعداد جواب‌های ارسال شده بیش‌تر از حد مجاز است';
        }
        if (fa != '') {
          draft.errors.errors[key + '_en'] = draft.errors.errors[key];
          draft.errors.errors[key] = fa;
          draft.errors.fa = 'لطفا خطاهای ایجاد شده را اصلاح کنید.';
        }
      });
    }

    console.log('DRRRFTTT');
    console.log(draft.errors);
    return draft;
  });
}

function trialClearReducer(state = initialState.trials, action) {
  return produce(state, (draft) => {
    draft.success = false;
    draft.fail = false;
    draft.finalize = false;
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
