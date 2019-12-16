import BASE_ADDR from '.';

export function home() {
  return `${BASE_ADDR}/blog`;
}

export function post(id) {
  return `${BASE_ADDR}/blog/${id}`;
}
