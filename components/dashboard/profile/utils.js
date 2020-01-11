const prof_fields = [
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
];

const pass_fields = [
  {
    en: 'new_password1',
    fa: 'رمز عبور جدید',
    readOnly: false,
    pass: true,
  },
  {
    en: 'new_password2',
    fa: 'تکرار رمز عبور جدید',
    readOnly: false,
    pass: true,
  },
  {
    en: 'old_password',
    fa: 'رمز عبور قبلی',
    readOnly: false,
    pass: true,
  },
];
export { prof_fields, pass_fields };
