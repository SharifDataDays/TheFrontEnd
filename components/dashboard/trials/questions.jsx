import _ from 'lodash';
import React from 'react';
import sample from './sample.json';
import FieldAnswer from './answers/field';
import ChoiceAnswer from './answers/choice';
import FileAnswer from './answers/file';

function getAnswer(question) {
  const { type } = question;
  if (type === 'single_select' || type === 'multi_select') {
    return ChoiceAnswer;
  }
  if (type === 'file_upload') {
    return FileAnswer;
  }
  return FieldAnswer;
}

function getCount(question) {
  const { type } = question;
  if (type === 'single_answer' || type === 'single_select') {
    return 1;
  }
  if (type === 'numeric_range') {
    return 2;
  }
  if (type === 'multi_answer') {
    return question.answer_count_limit;
  }
  if (type === 'single_select' || type === 'multi_select') {
    return question.choices.length;
  }
  return undefined;
}

function getType(question) {
  const { type } = question;
  if (type === 'numeric_range') {
    return 'number';
  }
  if (type === 'file_upload') {
    return 'file';
  }
  if (type !== 'single_select' || type !== 'multi_select') {
    return question.answer_type;
  }
  return undefined;
}

function Questions({ trials, changeAnswer }) {
  return (
    <>
      {_.map(sample.trial.question_submissions, (q, i) => {
        const { question } = q;
        const Answer = getAnswer(question);
        return (
          <Answer
            key={i}
            number={i + 1}
            saved={trials[`i${q.id}`]}
            id={q.id}
            content={question.body}
            count={getCount(question)}
            type={getType(question)}
            qtype={question.type}
            choices={question.choices}
            changeAnswer={changeAnswer}
          />
        );
      })}
    </>
  );
}

export default Questions;
