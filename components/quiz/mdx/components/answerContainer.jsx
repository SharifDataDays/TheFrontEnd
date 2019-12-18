import React from 'react';
import { Form } from 'semantic-ui-react';

function AnswerContainer({ children, answers }) {
  return (
    <div dir="RTL">
      <Form>{children}</Form>
    </div>
  );
}

export default AnswerContainer;
