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
    en: 'phone_number',
    fa: 'شماره تماس',
    readOnly: false,
  },
  {
    en: 'student_id',
    fa: 'شماره دانش‌جویی',
    readOnly: false,
  },
  {
    en: 'uni',
    fa: 'دانشگاه',
    readOnly: false,
    dropdown: true,
  },
  {
    en: 'bmp',
    fa: 'مقطع تحصیلی',
    readOnly: false,
    dropdown: true,
  },
  {
    en: 'major',
    fa: 'رشته‌ی تحصیلی',
    readOnly: false,
    dropdown: true,
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
    fa: 'رمز عبور فعلی',
    readOnly: false,
    pass: true,
  },
];

export { prof_fields, pass_fields };
