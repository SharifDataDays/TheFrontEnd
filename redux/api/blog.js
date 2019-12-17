import BASE_ADDR from '.';

export function blogHomeAPI() {
  return `${BASE_ADDR}/blog`;
}

export function postAPI(id) {
  return `${BASE_ADDR}/blog/${id}`;
}
