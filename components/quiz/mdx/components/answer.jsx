import React from 'react';
import { Form, Input } from 'semantic-ui-react';

function Answer(props) {
  return <Form.Field control={Input} {...props} />;
}

export default Answer;
