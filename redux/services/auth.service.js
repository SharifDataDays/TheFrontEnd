import axios from 'axios';
import Router from 'next/router';
import cookie from 'js-cookie';
import { loginAPI } from '../api/auth';

export function login(username, password) {
  return axios.post(loginAPI(), { username, password }).then((res) => {
    const { data } = res;
    if (data.status_code === 200) {
      const token = {
        refresh: data.refresh,
        access: data.access,
      };
      cookie.set('token', token, { expires: 1 });
      Router.push('/dashboard/tasks');
      return {
        detail: 'success',
        status_code: 200,
      };
    }
    return data;
  });
}

export function logout() {
  cookie.remove('token');
  Router.push('/login');
}
