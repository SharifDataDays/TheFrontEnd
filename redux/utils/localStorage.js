import Logger from 'js-logger';
import initialState from '../store/initialState';

/*
 * Load state from local storage.
 */
export function loadState() {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState) {
      return JSON.parse(serializedState);
    }
    return initialState;
  } catch (err) {
    Logger.error(err);
    return initialState;
  }
}

/*
 * Save state to local storage.
 *
 * @param state {StateType} - The state of the program to be saved in local storage.
 */
export function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    Logger.error(err);
  }
}
