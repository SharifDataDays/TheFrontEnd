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

  return {
    errors: {
      email: false,
    },
  };
}

export default check;
