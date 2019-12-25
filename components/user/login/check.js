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

  return {
    errors: {
      username: false,
      password: false,
    },
  };
}

export default check;
