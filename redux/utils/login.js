import axios from 'axios'
import { loginAPI } from '../api/auth';

export function preReqCheck(fields) {
    let res = {};
    let newErrors = {};
    for (var key in fields) {
      if (fields[key] === '') newErrors[key] = true;
    }
    if (Object.entries(newErrors).length !== 0) {
      res['problem'] = 'incompleteFields';
      res['newErrors'] = newErrors;
      return res;
    }
    return {
        newErrors : {
            username : false,
            password : false
        }
    }
}

export function reqLogin(username, password) {
    return axios.post(loginAPI(), {username, password})
}