import { TEAM_FINAL, TEAM_CLEAR, TEAM_FAIL, TEAM_SUCCESS } from '../actions/team';
import initialState from '../store/initialState';
import produce from 'immer';

function teamClearReducer(state = initialState.team, action) {
  return produce(state, (draft) => {
    draft.success = false;
    draft.fail = false;
    draft.finalized = false;
    draft.errors = {};
    return draft;
  });
}

function teamFailReducer(state = initialState.team, action) {
  return produce(state, (draft) => {
    const { errors } = action.payload;
    draft.fail = true;
    draft.success = false;
    draft.errors = errors;

    console.log(errors);
    let fa = '';
    if (draft.errors.name === 'invalid name') {
      fa = 'فیلد نباید خالی باشد';
    } else if (
      !_.isUndefined(draft.errors.participant) &&
      draft.errors.participant[0] === 'This field may not be blank.'
    ) {
      fa = 'فیلد نباید خالی باشد';
    } else if (!_.isUndefined(draft.errors) && draft.errors[0] === 'name must be unique') {
      fa = 'نام انتخاب شده تکراری است';
    } else if (
      !_.isUndefined(draft.errors) &&
      draft.errors[0] === "can't finalize uncompleted team"
    ) {
      fa = 'تیم کامل نیست';
    } else if (!_.isUndefined(draft.errors.non_field_errors)) {
      if (draft.errors.non_field_errors[0] === 'requested user not found') {
        fa = 'کاربر مورد نظر یافت نشد';
      } else if (draft.errors.non_field_errors[0] === "requested user's already in team") {
        fa = 'کاربر مورد نظر در تیم وجود دارد';
      } else if (draft.errors.non_field_errors[0] === 'same invitation already exists') {
        fa = 'دعوت‌نامه‌ی عضویت قبلا به این کاربر ارسال شده است';
      } else if (
        draft.errors.non_field_errors[0] ===
        'number of team members and open invitations exeeds team size'
      ) {
        fa = 'تعداد اعضای تیم بیش‌تر از حد مجاز است';
      } else if (draft.errors.non_field_errors[0] === "requested user's team is finalized") {
        fa = 'تیم کاربر مورد نظر تکمیل است';
      } else {
        fa = draft.errors.non_field_errors[0];
      }
    }

    draft.errors.fa = fa;

    return draft;
  });
}

function teamSuccessReducer(state = initialState.team, action) {
  return produce(state, (draft) => {
    draft.fail = false;
    draft.success = true;
    draft.error = {};
    return draft;
  });
}

function teamFinalizeReducer(state = initialState.team, action) {
  return produce(state, (draft) => {
    draft.finalized = true;
    return draft;
  });
}

export default function teamReducers(state = initialState.team, action) {
  switch (action.type) {
    case TEAM_FINAL:
      return teamFinalizeReducer(state, action);
    case TEAM_SUCCESS:
      return teamSuccessReducer(state, action);
    case TEAM_CLEAR:
      return teamClearReducer(state, action);
    case TEAM_FAIL:
      return teamFailReducer(state, action);
    default:
      return state;
  }
}
