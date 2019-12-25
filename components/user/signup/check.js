import _ from 'lodash';
import validator from 'validator';

function check(fields) {
  const res = {};
  const newErrors = {};

  _.forEach(fields, (value, key) => {
    if (value === '') {
      newErrors[key] = true;
    }
  });

  if (Object.entries(newErrors).length !== 0) {
    res.problem = 'incompleteFields';
    res.newErrors = newErrors;
    return res;
  }

  if (!validator.isEmail(fields.email)) {
    res.problem = 'invalidEmail';
    newErrors.email = true;
    res.newErrors = newErrors;
    return res;
  }

  if (fields.password !== fields.confirmPassword) {
    res.problem = 'passwordsNotSame';
    newErrors.confirmPassword = true;
    res.newErrors = newErrors;
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

export default check;
