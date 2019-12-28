import _ from 'lodash';
import validator from 'validator';

const fields = [
  // {
  //   en: 'username',
  //   fa: 'نام کاربری',
  //   readOnly: true,
  // },
  {
    en: 'firstname_fa',
    fa: 'نام به فارسی',
    readOnly: false,
  },
  {
    en: 'lastname_fa',
    fa: 'نام خانوادگی به فارسی',
    readOnly: false,
  },
  {
    en: 'firstname_en',
    fa: 'نام به انگلیسی',
    readOnly: false,
  },
  {
    en: 'lastname_en',
    fa: 'نام خانوادگی به انگلیسی',
    readOnly: false,
  },
  // {
  //   en: 'email',
  //   fa: 'ایمیل',
  //   readOnly: true,
  // },
  {
    en: 'birth_date',
    fa: 'تاریخ تولد',
    readOnly: false,
    date: true,
  },
  {
    en: 'university',
    fa: 'دانشگاه',
    readOnly: false,
  },
  // {
  //   en: 'education',
  //   fa: 'تحصیلات',
  //   readOnly: true,
  // },
  // {
  //   en: 'residence',
  //   fa: 'محل اقامت',
  //   readOnly: true,
  // },
  // {
  //   en: 'calling_number',
  //   fa: 'تلفن همراه',
  //   readOnly: true,
  // },
  {
    en: 'password_1',
    fa: 'رمز عبور',
    readOnly: false,
    pass: true,
  },
  {
    en: 'password_2',
    fa: 'تکرار رمز عبور',
    readOnly: false,
    pass: true,
  },
];

function check(fields) {
  const res = {};
  const errors = {
    firstname_fa: false,
    lastname_fa: false,
    firstname_en: false,
    lastname_en: false,
    username: false,
    email: false,
    birth_date: false,
    university: false,
    password_1: false,
    password_2: false,
  };

  _.forEach(fields, (value, key) => {
    if ((value === undefined || value === '') && key !== 'password_1' && key != 'password_2') {
      errors[key] = true;
      res.problem = 'incompleteFields';
    }
  });

  // if (!validator.isEmail(fields.email)) {
  //   res.problem = 'invalidEmail';
  //   errors.email = true;
  //   res.errors = errors;
  //   return res;
  // }

  if (fields.password_1 !== fields.password_2) {
    res.problem = 'passwordsNotSame';
    errors.password_2 = true;
  }
  res.errors = errors;
  return res;
}

function reverseBirthDate(birth_date) {
  if (birth_date === undefined) {
    return birth_date;
  }
  let parts = birth_date.split('-');
  parts.reverse();
  let newbirth_date = parts[0] + '-' + parts[1] + '-' + parts[2];

  return newbirth_date;
}
export { fields, reverseBirthDate, check };
