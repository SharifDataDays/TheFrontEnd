import BASE_ADDR from '.';

export function authAPI() {
  return `${BASE_ADDR}/accounts/profile`;
}

export function loginAPI() {
  return `${BASE_ADDR}/accounts/login`;
}

export function refreshAPI() {
  return `${BASE_ADDR}/accounts/refresh`;
}
