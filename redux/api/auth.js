import BASE_ADDR from '.';

export function loginAPI() {
  return `${BASE_ADDR}/accounts/login`;
}

export function refreshAPI() {
    return `${BASE_ADDR}/accounts/refresh`;
  }
  