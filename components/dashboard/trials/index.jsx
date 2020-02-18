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
      submitted: false,
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
    console.log(questions.question_submissions);
    e.preventDefault();

    submit(token, contest, milestone, task, trial, final, questions.question_submissions);

    {
      this.setState({ submitted: true });
      if (final) {
        this.setState({
          final: false,
        });
      }
    }
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
    console.log(this.props);

    console.log('TRIALS');
    console.log(trials);

    if (this.props.trials.fail) {
      console.log(this.props.trials.errors);
      // return this.msg('پاسخ‌های ارسالی شما با خطا مواجه شد.' + "\n" + trials.errors.fa, ``);
    }
    if (this.props.trials.success) {
      console.log(this.props.trials.errors);
      return this.msg('پاسخ شما ارسال شد.', ``);
    }
    if (this.state.endTime) {
      return this.msg(
        'زمان شما تمام شده‌ است.',
        `/dashboard/${this.props.contest}/${this.props.milestone}/`,
      );
    }


    // if (this.state.error) {
    //   return this.msg(
    //     this.state.error,
    //     `/dashboard/${this.props.contest}/${this.props.milestone}/${this.props.task}/${this.props.trial}`,
    //   );
    // }
    // if(this.props.fail) {
    //   return this.msg(
    //     'پاسخ‌های ارسالی شما با خطا مواجه شد.',
    //     `/dashboard/${this.props.contest}/${this.props.milestone}/${this.props.task}/${this.props.trial}`,
    //   );
    // }
    // else if (this.state.final) {
    //   return this.msg(
    //     'پاسخ شما ارسال شد.',
    //     `/dashboard/${this.props.contest}/${this.props.milestone}/`,
    //   );
    // }
    // else if (this.state.submitted) {
    //   return this.msg(
    //     'پاسخ شما ذخیره شد.',
    //     `/dashboard/${this.props.contest}/${this.props.milestone}/${this.props.task}/${this.props.trial}`,
    //   );
    // }

    return (
      <Grid style={{ margin: '2rem auto', direction: 'rtl' }} centered>
        <Grid.Row>
          <Grid.Column computer={10} tablet={12} mobile={14}>
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
