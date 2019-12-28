import axios from 'axios';
import { profileAPI } from '~/redux/api/dashboard';
import { refreshAPI } from '~/redux/api/auth';
import { reverseBirthDate } from './utils';

export async function profileUpdate(fields, token) {
  const { firstname_fa, firstname_en, lastname_fa, lastname_en, birth_date, university } = fields;
  const data = {
    firstname_fa,
    firstname_en,
    lastname_fa,
    lastname_en,
    birth_date,
    university,
  };
  data.birth_date = reverseBirthDate(data.birth_date)
  if (fields['password_1'].length !== 0) {
    data.password_1 = fields.password_1;
    data.password_2 = fields.password_2;
  }

  token = await getToken(token);
  await axios
    .put(profileAPI(), data, {
      headers: {
        Authorization: `Bearer ${token ? token.access : token}`,
      },
    })
    .then((res) => {
      console.log(res);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}

export async function getToken(token) {
  const initialRes = await fetch(profileAPI(), {
    headers: {
      Authorization: `Bearer ${token.access}`,
    },
  });

  const initialResJson = await initialRes.json();
  if (initialResJson.status_code !== 200) {
    const newAccess = await fetch(refreshAPI(), {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        refresh: token.refresh,
      }),
    });
    const newAccessJson = await newAccess.json();
    token = {
      refresh: token.refresh,
      access: newAccessJson.access,
    };
  }
  return token;
}
