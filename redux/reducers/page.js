import produce from 'immer';
import { PAGE_LOADING } from '../actions/page';
import initialState from '../store/initialState';

function pageLoadingReducer(state = initialState.page, action) {
  return produce(state, (draft) => {
    const { loading } = action.payload;
    draft.loading = loading;
    return draft;
  });
}

function pageReducers(state = initialState.page, action) {
  switch (action.type) {
    case PAGE_LOADING:
      return pageLoadingReducer(state, action);
    default:
      return state;
  }
}

export default pageReducers;
