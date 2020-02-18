import React from 'react';
import { Grid, Button, Message } from 'semantic-ui-react';
import Questions from './questions';
import { Component } from 'react';
import _ from 'lodash';
import { relativeTimeThreshold } from 'jalali-moment';
import { ThemeConsumer } from 'styled-components';
import { connect } from 'react-redux';
import { C_NUMBER_MODE } from 'highlight.js';

class Trials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endTime: false,
      final:
        !_.isUndefined(this.props.questions.submit_time) &&
        !_.isNull(this.props.questions.submit_time),
    };
  }

  endTime = () => {
    this.setState({
      endTime: true,
    });
  };

  msg = (text, link) => {
    return (
      <Grid style={{ margin: '2rem auto', direction: 'rtl' }} centered>
        <Grid.Row>
          <Grid.Column computer={10} tablet={12} mobile={14}>
            <Message>{text}</Message>
          </Grid.Column>
        </Grid.Row>

        <Button
          href={link}
          onClick={() => {
            if (link === '' || _.isUndefined(link)) this.props.clear(false);
          }}
          primary
          size="large"
          floated="right"
        >
          بازگشت
        </Button>
      </Grid>
    );
  };

  onclick = async (e, final) => {
    const { submit, token, contest, milestone, task, trial, questions } = this.props;
    e.preventDefault();

    submit(token, contest, milestone, task, trial, final, questions.question_submissions);

  };

  render() {
    const {
      token,
      trials,
      changeAnswer,
      submit,
      contest,
      milestone,
      task,
      trial,
      questions,
      clear,
    } = this.props;

    if (this.props.trials.success && this.props.trials.finalize) {
      return this.msg(
        'پاسخ شما ارسال شد.',
        `/dashboard/${this.props.contest}/${this.props.milestone}/`,
      );
    }
    if (this.state.final) {
      return this.msg(
        'این آزمون ثبت نهایی شده است.',
        `/dashboard/${this.props.contest}/${this.props.milestone}/`,
      );
    }
    if (this.state.endTime) {
      return this.msg(
        'زمان شما تمام شده‌ است.',
        `/dashboard/${this.props.contest}/${this.props.milestone}/`,
      );
    }

    return (
      <Grid style={{ margin: '2rem auto', direction: 'rtl' }} centered>
        <Grid.Row>
          <Grid.Column computer={10} tablet={12} mobile={14}>
            <Message negative hidden={!this.props.trials.fail}>
              {trials.errors.fa}
            </Message>
            <Message positive hidden={!this.props.trials.success}>
              {'پاسخ شما ارسال شد.'}
            </Message>

            <Questions
              trials={trials}
              changeAnswer={changeAnswer}
              questions={questions}
              endTime={this.endTime.bind(this)}
            />

            <Button
              size="large"
              floated="right"
              primary
              onClick={(e) => {
                this.onclick(e, true);
              }}
            >
              ثبت نهایی
            </Button>
            <Button
              size="large"
              floated="right"
              primary
              onClick={(e) => {
                this.onclick(e, false);
              }}
            >
              ذخیره
            </Button>
            <a href={`/dashboard/${this.props.contest}/${this.props.milestone}/`}>
              <Button size="large" floated="right">
                بازگشت
              </Button>
            </a>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Trials;
