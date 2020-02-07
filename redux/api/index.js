import axios from 'axios';

//const BASE_ADDR = 'https://datadays.sharif.edu/api';
const BASE_ADDR = 'http://81.31.170.5/test/api';

const TERMS = `${BASE_ADDR}/terms/`;

export function termsAPI() {
  return axios.get(TERMS);
}

export default BASE_ADDR;
