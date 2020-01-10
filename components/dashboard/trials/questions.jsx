import _ from 'lodash';
import React from 'react';
import sample from './sample.json';
import Content from '~/components/global/mdx';

function Questions() {
  return (
    <>
      {_.map(sample.trial.question_submissions, (q, i) => {
        return <Content key={i} content={q.question.body} />;
      })}
    </>
  );
}

export default Questions;
