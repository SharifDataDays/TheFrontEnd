import _ from 'lodash';
import React, { Component } from 'react';
import Countdown from 'react-countdown';
import FieldAnswer from './answers/field';
import ChoiceAnswer from './answers/choice';
import FileAnswer from './answers/file';
import styled from 'styled-components';
import { space, layout, color, border, typography } from 'styled-system';
import { Divider } from 'semantic-ui-react';

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

const Container = styled.div`
  ${space}
  ${color}
  ${border}
`;

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      end: false,
    };
  }

  renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      this.props.endTime();
      return <></>;
    }
    return (
      <h1 style={{ textAlign: 'center' }}>
        {hours}:{minutes}:{seconds}
      </h1>
    );
  };

  render() {
    const { trials, changeAnswer, questions } = this.props;

    return (
      <>
        <Container p={2} mx={[1,2,2]} mb={2}>
          زمان باقی‌مانده:{' '}
          <Countdown dir="ltr" date={new Date(questions.due_time)} renderer={this.renderer} />
        </Container>
        <Divider />
        {_.map(questions.question_submissions, (q, i) => {
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
}

export default Questions;
