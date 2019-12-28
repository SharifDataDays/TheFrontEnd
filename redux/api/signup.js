import axios from 'axios'

export function signupAPI() {
  return `${BASE_ADDR}/accounts/signup`;
}

export function signupRequest(data) {
  return axios.post(signupAPI(), data)
}
