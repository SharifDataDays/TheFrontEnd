import { colorStyle, gridAutoRows } from 'styled-system';
import { profileAPI } from '../api/profile';
import validator from 'validator';
import axios from 'axios';

export async function getProfileData() {
  axios
    .get(profileAPI())
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => console.log(err));
}

export function preReqCheck(fields) {
  let res = {};
  let newErrors = {};
  if (fields['password'] !== fields['confirmPassword']) {
    res['problem'] = 'passwordsNotSame';
    newErrors['confirmPassword'] = true;
    res['newErrors'] = newErrors;
    return res;
  }
  return {
    newErrors: {
      nameFa: false,
      lastNameFa: false,
      nameEn: false,
      lastNameEn: false,
      userName: false,
      email: false,
      birthDate: false,
      university: false,
      password: false,
      confirmPassword: false,
    },
  };
}

function reverseBirthDate(birthDate) {
  let parts = birthDate.split('-');
  parts.reverse();
  let newBirthDate = parts[0] + '-' + parts[1] + '-' + parts[2];

  return newBirthDate;
}

export async function profileUpdate(fields) {
  let data = {
    // username: fields['userName'],
    // email: fields['email'],
    password_1: fields['password'],
    password_2: fields['confirmPassword'],
    profile: {
      firstname_fa: fields['nameFa'],
      firstname_en: fields['lastNameFa'],
      lastname_fa: fields['nameEn'],
      lastname_en: fields['lastNameEn'],
      birth_date: reverseBirthDate(fields['birthDate']),
      university: fields['university'],
    },
  };
  // const res = await fetch(signupAPI(), {
  //   method : 'POST',
  //   headers : {
  //     'Content-Type' : 'application/json',
  //     'Accept' : 'application/json'
  //   },
  //   body : JSON.stringify(data)
  // })
  // const content = await res.json()
  // try {
  //   const res = await axios.post(signupAPI(), data)

  // } catch(e) {

  // }
  axios
    .post(profileAPI(), data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
