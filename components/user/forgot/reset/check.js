import _ from 'lodash';

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

  if (fields.password_1 !== fields.password_2) {
    res.problem = 'passwordsNotSame';
    errors.password_2 = true;
    res.errors = errors;
    return res;
  }

  return {
    errors: {
      password_1: false,
      password_2: false,
    },
  };
}

export default check;
