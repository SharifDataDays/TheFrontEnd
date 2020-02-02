import axios from 'axios';
import BASE_ADDR from '.';

const BLOG_HOME = `${BASE_ADDR}/blog/`;
const BLOG_POST = (id) => `${BASE_ADDR}/blog/${id}/`;

export function blogHomeAPI() {
  return axios.get(BLOG_HOME);
}

export function blogPostAPI(id) {
  return axios.get(BLOG_POST(id));
}
