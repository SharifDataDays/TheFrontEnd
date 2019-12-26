import React from 'react';
import { Form } from 'semantic-ui-react';

function SignupInput({ error, onChange, type, name, value, label, width }) {
  return (
    <Form.Input
      error={error}
      onChange={onChange}
      type={type}
      name={name}
      value={value}
      label={label}
      style={{ marginBottom: 10 }}
      width={width || 10}
    />
  );
}

export default SignupInput;
