import { PROFILE_CHECK, PROFILE_SUCCESS, PROFILE_FAIL, PROFILE_CLEAR } from '../actions/profile';
import initialState from '../store/initialState';
import produce from 'immer';

function profileClearReducer(state = initialState.profile, action) {
  return produce(state, (draft) => {
    draft.success = false;
    draft.errors = {};
    return draft;
  });
}

function profileCheckerReducer(state = initialState.profile, action) {
  return produce(state, (draft) => {
    const { fields } = action.payload;
    const checkFields = { ...fields, ...fields.profile };
    _.forEach(checkFields, (value, key) => {
      if (value === '' && key !== 'password_1' && key != 'password_2') {
        draft.errors[key] = 'فیلد خالی است.';
      }
    });

    if (checkFields.password_1 !== checkFields.password_2) {
      draft.errors.password_1 = 'گذرواژه‌ها یکسان نیستند.';
      draft.errors.password_2 = 'گذرواژه‌ها یکسان نیستند.';
    }
    return draft;
  });
}

function profileFailReducer(state = initialState.profile, action) {
  return produce(state, (draft) => {
    const { errors } = action.payload;
    draft.success = false;
    draft.errors = errors;
    return draft;
  });
}

function profileSuccessReducer(state = initialState.profile, action) {
  return produce(state, (draft) => {
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
      return profileClearReducer(state, action)
    default:
      return state;
  }
}
