import axios from 'axios';

const BASE_ADDR = 'https://datadays.sharif.edu/test/api';
const TERMS = `${BASE_ADDR}/terms/`;

export function termsAPI() {
  return axios.get(TERMS);
}

export default BASE_ADDR;