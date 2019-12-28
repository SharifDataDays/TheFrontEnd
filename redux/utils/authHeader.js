export function authHeader() {
  // return authorization header with jwt token
  let token = JSON.parse(localStorage.getItem('token'));

  if (user && user.token) {
    return { Authorization: 'Bearer ' + user.token };
  } else {
    return {};
  }
}
