import {
  PROFILE_CHECK,
  PROFILE_PASS_CHECK,
  PROFILE_SUCCESS,
  PROFILE_FAIL,
  PROFILE_CLEAR,
} from '../actions/profile';
import initialState from '../store/initialState';
import produce from 'immer';
import validator from 'validator';

function profileClearReducer(state = initialState.profile, action) {
  return produce(state, (draft) => {
    draft.success = false;
    draft.fail = false;
    draft.errors = {};
    return draft;
  });
}
function profilePasswordCheckerReducer(state = initialState.profile, action) {
  return produce(state, (draft) => {
    const { fields } = action.payload;
    draft.errors = {};
    const checkFields = { ...fields.password, ...fields.profile };

    if (
      checkFields.new_password1 !== '' &&
      !_.isUndefined(checkFields.new_password1) &&
      (checkFields.old_password === '' || _.isUndefined(checkFields.old_password))
    ) {
      draft.errors.old_password = 'فیلد خالی است.';
    }

    return draft;
  });
}

function profileCheckerReducer(state = initialState.profile, action) {
  return produce(state, (draft) => {
    const { fields } = action.payload;
    draft.errors = {};
    const checkFields = { ...fields.password, ...fields.profile };

    _.forEach(checkFields, (value, key) => {
      if (
        (value === '' || _.isUndefined(value) || _.isNull(value)) &&
        key !== 'new_password2' &&
        key != 'new_password1' &&
        key != 'old_password'
      ) {
        draft.errors[key] = 'فیلد خالی است.';
      }
    });

    if (!validator.isNumeric('' + checkFields.student_id)) {
      draft.errors.student_id = 'یک شماره دانشجویی معتبر وارد کنید.';
    }
    if (
      !validator.isNumeric('' + checkFields.phone_number) ||
      checkFields.phone_number.length != 11
    ) {
      draft.errors.phone_number = 'یک شماره تماس معتبر به فرمت ۰۹۱۲۳۴۵۶۷۸۹ وارد کنید.';
    }
    if (checkFields.new_password1 !== checkFields.new_password2) {
      draft.errors.new_password1 = 'گذرواژه‌ها یکسان نیستند.';
      draft.errors.new_password2 = 'گذرواژه‌ها یکسان نیستند.';
    }
    if (
      checkFields.new_password1 !== '' &&
      !_.isUndefined(checkFields.new_password1) &&
      (checkFields.old_password === '' || _.isUndefined(checkFields.old_password))
    ) {
      draft.errors.old_password = 'فیلد خالی است.';
    }

    return draft;
  });
}

function profileFailReducer(state = initialState.profile, action) {
  return produce(state, (draft) => {
    const { errors } = action.payload;
    draft.fail = true;
    draft.success = false;
    draft.errors = errors;
    return draft;
  });
}

function profileSuccessReducer(state = initialState.profile, action) {
  return produce(state, (draft) => {
    draft.fail = false;
    draft.success = true;
    draft.error = {};
    return draft;
  });
}

export default function profileReducers(state = initialState.profile, action) {
  switch (action.type) {
    case PROFILE_CHECK:
      return profileCheckerReducer(state, action);
    case PROFILE_FAIL:
      return profileFailReducer(state, action);
    case PROFILE_SUCCESS:
      return profileSuccessReducer(state, action);
    case PROFILE_CLEAR:
      return profileClearReducer(state, action);
    case PROFILE_PASS_CHECK:
      return profilePasswordCheckerReducer(state, action);
    default:
      return state;
  }
}
