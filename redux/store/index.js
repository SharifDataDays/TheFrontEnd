import Logger from 'js-logger';
import { createStore, applyMiddleware } from 'redux';
import { loadState } from '../utils/localStorage';

const logger = (store) => (next) => (action) => {
  Logger.log('dispatching', action);
  const result = next(action);
  Logger.log('next state', store.getState());
  return result;
};

function makeStore(initialState, options) {
  const persistedState = loadState();
  const store = createStore(() => persistedState, applyMiddleware(logger));
  return store;
}

export default makeStore;
