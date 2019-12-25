import { profileAPI } from '../api/profile';
import axios from 'axios';

export async function getProfileData(USER_TOKEN) {
  const AuthStr = 'Bearer '.concat(USER_TOKEN);
    const res = await axios.get(profileAPI(), { headers: { Authorization: AuthStr } });
    const data = await res.data;
    return { data };
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

    firstname_fa: fields['nameFa'],
    firstname_en: fields['lastNameFa'],
    lastname_fa: fields['nameEn'],
    lastname_en: fields['lastNameEn'],
    birth_date: reverseBirthDate(fields['birthDate']),
    university: fields['university'],
  };
  if (fields['password'].lenght !== 0) {
    data.password_1 = fields['password'];
    data.password_2 = fields['confirmPassword'];
  }
  USER_TOKEN = '';
  const AuthStr = 'Bearer '.concat(USER_TOKEN);
  axios
    .put(profileAPI(), data, { headers: { Authorization: AuthStr } })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
