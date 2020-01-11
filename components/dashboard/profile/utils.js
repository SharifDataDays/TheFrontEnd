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
export {fields};