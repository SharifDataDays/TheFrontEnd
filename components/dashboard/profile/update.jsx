import axios from 'axios';
import nextCookie from 'next-cookies';
import { profileAPI } from '~/redux/api/dashboard';

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

  console.log(data);
  console.log(token);
  console.log(token ? token.access : token);
  axios
    .put(profileAPI(), data, {
      headers: {
        Authorization: `Bearer ${token ? token.access : token}`,
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
