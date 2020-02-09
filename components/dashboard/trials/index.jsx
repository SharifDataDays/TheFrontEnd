import React from 'react';
import { Grid, Button, Message } from 'semantic-ui-react';
import Questions from './questions';
import { Component } from 'react';
import _ from 'lodash';

class Trials extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      endTime: false,
      submitted: false,
      final: !_.isUndefined(this.props.questions.submit_time) && !_.isNull(this.props.questions.submit_time)
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

        <a href={link}>
          <Button primary size="large" floated="right">
            بازگشت
          </Button>
        </a>
      </Grid>
    );
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
    } = this.props;
    console.log(this.props)

    if (this.state.final) {
      return this.msg(
        'پاسخ شما ارسال شد.',
        `/dashboard/${this.props.contest}/${this.props.milestone}/`,
      );
    }
    if (this.state.submitted) {
      return this.msg(
        'پاسخ شما ذخیره شد.',
        `/dashboard/${this.props.contest}/${this.props.milestone}/${this.props.task}/${this.props.trial}`,
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
                  e.preventDefault();
                  submit(token, contest, milestone, task, trial, true);
                  this.setState({ submitted: true , final: true});
                }}
              >
                 ثبت نهایی
              </Button>
              <Button
                size="large"
                floated="right"
                primary
                onClick={(e) => {
                  e.preventDefault();
                  submit(token, contest, milestone, task, trial, false);
                  this.setState({ submitted: true });
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
