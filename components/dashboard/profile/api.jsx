import axios from 'axios';
import { profileAPI } from '~/redux/api/dashboard';
import { refreshAPI } from '~/redux/api/auth';

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
  console.log('Lets gooo from profile');
  console.log(data);
  if (fields['password_1'].lenght !== 0) {
    data.password_1 = fields.password_1;
    data.password_2 = fields.password_2;
  }
  console.log('before');
  console.log(token);

  token = await getToken(token);
  console.log('after');
  console.log(token);
  axios
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
  console.log('token1');
  console.log(token);

  const initialRes = await fetch(profileAPI(), {
    headers: {
      Authorization: `Bearer ${token.access}`,
    },
  });
  const initialResJson = await initialRes.json();
  console.log('initialRes');
  console.log(initialResJson);

  if (initialResJson.status_code !== 200) {
    const newAccess = await fetch(refreshAPI(), {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        refresh: token.refresh,
      }),
    });
    const newAccessJson = await newAccess.json();
    console.log('new access');
    console.log(newAccessJson);

    token = {
      refresh: token.refresh,
      access: newAccessJson.access,
    };
  }
  return token;
}
