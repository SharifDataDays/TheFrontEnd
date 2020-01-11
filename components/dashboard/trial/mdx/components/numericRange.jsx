import React from 'react';
import { Form } from 'semantic-ui-react';
import Answer from './answer';
import AnswerContainer from './answerContainer';

function NumericRange() {
  return (
    <AnswerContainer>
      <Form.Group unstackable widths="equal">
        <Answer label="حد پایین" type="number" />
        <Answer label="حد بالا" type="number" />
      </Form.Group>
    </AnswerContainer>
  );
}

export default NumericRange;
