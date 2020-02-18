import _ from 'lodash';
import produce from 'immer';
import validator from 'validator';
import initialState from '../store/initialState';
import { SIGNUP_CLEAR, SIGNUP_SUCCESS, SIGNUP_FAIL, SIGNUP_CHECK } from '../actions/signup';

function signupClearReducer(state = initialState.auth, action) {
  return produce(state, (draft) => {
    draft.success = false;
    draft.errors = {};
    return draft;
  });
}

function signupSuccessReducer(state = initialState.signup, action) {
  return produce(state, (draft) => {
    draft.success = true;
    draft.error = {};
    return draft;
  });
}

function signupFailReducer(state = initialState.signup, action) {
  return produce(state, (draft) => {
    const { errors } = action.payload;
    draft.success = false;
    draft.errors = errors;
    return draft;
  });
}

function signupChekerReducer(state = initialState.signup, action) {
  return produce(state, (draft) => {
    const { fields } = action.payload;
    const checkFields = { ...fields, ...fields.profile };
    _.forEach(checkFields, (value, key) => {
      if (value === '' || _.isUndefined(value) || _.isNull(value)) {
        draft.errors[key] = 'فیلد خالی است.';
      }
    });
    if (!validator.isNumeric("" + checkFields.student_id)) {
      draft.errors.student_id = 'یک شماره دانشجویی معتبر وارد کنید.';
    }
    if (!validator.isNumeric("" + checkFields.phone_number) || checkFields.phone_number.length != 11) {
      draft.errors.phone_number = 'یک شماره تماس معتبر به فرمت ۰۹۱۲۳۴۵۶۷۸۹ وارد کنید.';
    }
    if (!validator.isEmail(checkFields.email)) {
      draft.errors.email = 'ایمیل غیرمعتبر است.';
    }
    if (checkFields.password_1 !== checkFields.password_2) {
      draft.errors.password_1 = 'گذرواژه‌ها یکسان نیستند.';
      draft.errors.password_2 = 'گذرواژه‌ها یکسان نیستند.';
    }
  
    return draft;
  });
}

export default function signupReducers(state = initialState.signup, action) {
  switch (action.type) {
    case SIGNUP_CLEAR:
      return signupClearReducer(state, action);
    case SIGNUP_FAIL:
      return signupFailReducer(state, action);
    case SIGNUP_SUCCESS:
      return signupSuccessReducer(state, action);
    case SIGNUP_CHECK:
      return signupChekerReducer(state, action);
    default:
      return state;
  }
}
