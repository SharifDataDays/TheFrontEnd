import { taskAPI, taskListAPI } from '../api/dashboard';

export const SET_TASK_LIST = 'SET_TASK_LIST';
export const SET_TASK = 'SET_TASK';

function setTaskListAction(taskList) {
  return {
    type: SET_TASK_LIST,
    payload: {
      taskList,
    },
  };
}

export function loadTaskListAction() {
  return (dispatch, getState) => {
    const { token } = getState().auth;
    taskListAPI(token).then((res) => {
      if (res.data.status_code === 200) {
        dispatch(setTaskListAction(res.data.documents));
      } else {
        dispatch(setTaskListAction([]));
      }
    });
  };
}

function setTaskAction(task) {
  return {
    type: SET_TASK,
    payload: {
      task,
    },
  };
}

export function loadTaskAction(id) {
  return (dispatch, getState) => {
    const { token } = getState().auth;
    taskAPI(id, token).then((res) => {
      if (res.data.status_code === 200) {
        dispatch(setTaskAction(res.data));
      } else {
        dispatch(setTaskAction({}));
      }
    });
  };
}
