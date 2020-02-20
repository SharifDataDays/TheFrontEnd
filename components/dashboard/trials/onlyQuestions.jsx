import _ from 'lodash';
import React, { Component } from 'react';
import Countdown from 'react-countdown';
import FieldAnswer from './answers/field';
import ChoiceAnswer from './answers/choice';
import FileAnswer from './answers/file';
import styled from 'styled-components';
import { space, layout, color, border, typography, marginLeft } from 'styled-system';
import { Divider, Message } from 'semantic-ui-react';
import Content from '~/components/global/mdx';
import persianJs from 'persianjs';

const Container = styled.div`
  ${space}
  ${color}
  ${border}
`;

class OnlyQuestions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { questions } = this.props;

    return (
      <>
        {_.map(questions.question_submissions, (q, i) => {
          const { question } = q;

          //   console.log(question);
          //   console.log(q);
          return (
            <Container key={i}>
              <Content
                content={`سوال ${persianJs(i + 1)
                  .englishNumber()
                  .toString()}. ${question.body}`}
              />

              <Message
                //   warning
                info
                style={{
                  marginBottom: '25px',
                  marginLeft: '5px',
                  marginRight: '5px',
                }}
              >
                <p
                  style={{
                    //   fontWeight: 'bold',
                    fontSize: '19px',
                  }}
                >
                  امتیاز:{' '}
                  {persianJs(_.round(q.score.number, 2).toString())
                    .englishNumber()
                    .toString()}{' '}
                  {/* از{' '}
                    {persianJs(question.max_score.toString())
                      .englishNumber()
                      .toString()} */}
                </p>
                <p
                  style={{
                    textAlign: 'left',
                  }}
                >
                  {q.score.status} - {q.score.info}
                </p>
              </Message>
            </Container>
          );
        })}
      </>
    );
  }
}

export default OnlyQuestions;
