import BASE_ADDR from '.';

export function subscribeAPI() {
  return `${BASE_ADDR}/subscribe/email`;
}

export default function homeAPI() {
  return `${BASE_ADDR}/`;
}
