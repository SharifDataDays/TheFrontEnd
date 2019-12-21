import _ from 'lodash';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducers from '../reducers';
import { loadState, saveState } from '../utils/localStorage';

function makeStore(initialState, options) {
  const persistedState = loadState();
  const store = createStore(reducers, persistedState, applyMiddleware(logger));
  store.subscribe(
    _.throttle(() => {
      saveState({
        ...store.getState(),
      });
    }, 1000),
  );
  return store;
}

export default makeStore;