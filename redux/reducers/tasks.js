import produce from 'immer';
import { SET_TASK_LIST, SET_TASK } from '../actions/tasks';
import initialState from '../store/initialState';

function setTaskListReducer(state = initialState.tasks, action) {
  return produce(state, (draft) => {
    const { taskList } = action.payload;
    draft.list = taskList;
    return draft;
  });
}

function setTaskReducer(state = initialState.tasks, action) {
  return produce(state, (draft) => {
    const { task } = action.payload;
    draft.current = task;
    return draft;
  });
}

function tasksReducers(state = initialState.tasks, action) {
  switch (action.type) {
    case SET_TASK_LIST:
      return setTaskListReducer(state, action);
    case SET_TASK:
      return setTaskReducer(state, action);
    default:
      return state;
  }
}

export default tasksReducers;
