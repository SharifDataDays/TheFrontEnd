// @flow
/* eslint-disable react/jsx-props-no-spreading, flowtype/require-parameter-type */
import React from 'react';
import type { Node } from 'react';
import Answer from './answer';
import AnswerContainer from './answerContainer';
import NumericRange from './numericRange';

export default {
  SingleAnswer: (props): Node => <AnswerContainer {...props} />,
  MultiAnswer: (props): Node => <AnswerContainer {...props} />,
  Answer: (props): Node => <Answer {...props} />,
  NumericRange: (props): Node => <NumericRange {...props} />,
};
