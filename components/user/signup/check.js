import _ from 'lodash';
import validator from 'validator';

function check(fields) {
  const res = {};
  const errors = {};

  _.forEach(fields, (value, key) => {
    if (value === '') {
      errors[key] = true;
    }
  });

  if (Object.entries(errors).length !== 0) {
    res.problem = 'incompleteFields';
    res.errors = errors;
    return res;
  }

  if (!validator.isEmail(fields.email)) {
    res.problem = 'invalidEmail';
    errors.email = true;
    res.errors = errors;
    return res;
  }

  if (fields.password_1 !== fields.password_2) {
    res.problem = 'passwordsNotSame';
    errors.password_2 = true;
    res.errors = errors;
    return res;
  }

  return {
    errors: {
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
    },
  };
}

export default check;
