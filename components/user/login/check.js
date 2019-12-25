import _ from 'lodash';

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
  return {
    newErrors: {
      username: false,
      password: false,
    },
  };
}

export default check;
