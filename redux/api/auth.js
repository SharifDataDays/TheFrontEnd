import BASE_ADDR from '.';

export function loginAPI() {
  return `${BASE_ADDR}/accounts/api/token`;
}

export function refreshAPI() {
    return `${BASE_ADDR}/accounts/api/token/refresh`;
  }
  