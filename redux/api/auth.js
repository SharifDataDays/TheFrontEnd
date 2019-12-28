import BASE_ADDR from '.';

export function authAPI() {
  return `${BASE_ADDR}/accounts/profile`;
}

export function loginAPI() {
  return `${BASE_ADDR}/accounts/login`;
}

export function signupAPI() {
  return `${BASE_ADDR}/accounts/signup`;
}

export function forgotAPI() {
  return `${BASE_ADDR}/accounts/password/reset/`;
}

export function resetAPI() {
  return `${BASE_ADDR}/accounts/password/reset/confirm/`;
}

export function refreshAPI() {
  return `${BASE_ADDR}/accounts/refresh`;
}
