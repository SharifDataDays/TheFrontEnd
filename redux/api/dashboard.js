import BASE_ADDR from '.';

export function profileAPI() {
  return `${BASE_ADDR}/accounts/profile`;
}

export function taskListAPI() {
  return `${BASE_ADDR}/resources`;
}

export function taskAPI(id) {
  return `${BASE_ADDR}/resources/${id}`;
}

export function contestMilestoneListAPI(contestId){
  return `${BASE_ADDR}/contest/${contestId}/`
}

export function milestoneTaskListAPI(contestId, milestoneId){
  return `${BASE_ADDR}/contest/${contestId}/${milestoneId}/`
}