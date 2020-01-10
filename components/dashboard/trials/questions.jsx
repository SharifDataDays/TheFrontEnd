import _ from 'lodash';
import React from 'react';
import sample from './sample.json';
import FieldAnswer from './answers/field';
import ChoiceAnswer from './answers/choice';

function Questions() {
  return (
    <>
      {_.map(sample.trial.question_submissions, (q, i) => {
        const { question } = q;
        switch (question.type) {
          case 'single_answer':
            return (
              <FieldAnswer
                key={i}
                number={i + 1}
                id={q.id}
                content={question.body}
                type={question.type}
                count={1}
              />
            );
          case 'multi_answer':
            return (
              <FieldAnswer
                key={i}
                number={i + 1}
                id={q.id}
                content={question.body}
                type={question.type}
                count={question.answer_count_limit}
              />
            );
          case 'numeric_range':
            return (
              <FieldAnswer
                key={i}
                number={i + 1}
                id={q.id}
                content={question.body}
                type="number"
                count={2}
              />
            );
          case 'single_select':
            return (
              <ChoiceAnswer
                key={i}
                number={i + 1}
                id={q.id}
                content={question.body}
                choices={question.choices}
                count={1}
              />
            );
          case 'multi_select':
            return (
              <ChoiceAnswer
                key={i}
                number={i + 1}
                id={q.id}
                content={question.body}
                choices={question.choices}
                count={question.choices.length}
              />
            );
          default:
            return <></>;
        }
      })}
    </>
  );
}

export default Questions;
