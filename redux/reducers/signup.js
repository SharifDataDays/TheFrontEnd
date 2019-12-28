import initialState from '../store/initialState';
import produce from 'immer';
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_REQ_ERROR, clearSignup } from '../actions/signup';

// function clearSignup(state = initialState.signup, action) {
//   return
// }

function signupLoadingReducer(state = initialState.signup, action) {
  return produce(state, (draft) => {
    draft.loading = true;
    draft.error = ''
    return draft;
  });
}

function signupSuccessReducer(state = initialState.auth, action) {
  return produce(state, (draft) => {
    draft.loading = false;
    draft.error = '';
    return draft;
  });
}

function signupErrorReducer(state = initialState.auth, action) {
  return produce(state, (draft) => {
    const { error } = action.payload;
    draft.loading = false;
    draft.error = error;
    return draft;
  });
}
export default function signupReducers(state = initialState.signup, action) {
    switch (action.type) {
        case SIGNUP_REQUEST:
          return signupLoadingReducer(state, action);
        case SIGNUP_REQ_ERROR:
          return signupErrorReducer(state, action);
        case SIGNUP_SUCCESS:
          return signupSuccessReducer(state, action);
        default:
          return state;
      }
}
