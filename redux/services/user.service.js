import axios from 'axios';
import Router from 'next/router';
import cookie from 'js-cookie';

export function login(username, password) {
  axios
    .post('https://datadays.sharif.edu/api/accounts/login', { username, password })
    .then((res) => {
      const { data } = res;
      if (data.status_code === 200) {
        const token = {
          refresh: data.refresh,
          access: data.access,
        };
        cookie.set('token', token, { expires: 1 });
        Router.push('/dashboard/tasks');
      }
    });
}

export function logout() {
  cookie.remove('token');
  Router.push('/login');
}
