import React, { Component } from 'react';
import {
  Accordion,
  Icon,
  Dimmer,
  Loader,
  Segment,
  Divider,
  Button,
  Message,
} from 'semantic-ui-react';
import styled from 'styled-components';
import { space, layout, color, border, typography } from 'styled-system';
import { taskAPI, getNewTrialAPI } from '~/redux/api/dashboard';
import _ from 'lodash';
import Countdown from 'react-countdown';
import Router from 'next/router';
import persianJs from 'persianjs';

const Container = styled.div`
  ${space}
  ${color}
  ${border}
`;

const Text = styled.p`
  font-size: 21px;
  font-weight: bold;
  direction: rtl;
`;

const numberFarsi = (number) => {
  if (_.isUndefined(number) || _.isNull(number)) return;
  return persianJs(number.toString())
    .englishNumber()
    .toString();
};

export default class TrialAccardion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1,
      loading: true,
      trials: [],
      openTrial: false,
    };
    this.getData();
  }

  async getData() {
    const { cid, mid, tid, token } = this.props;
    const res = await taskAPI(cid, mid, tid, token);
    this.setState({
      loading: false,
      trials: res.data.trials,
      data: res.data,
    });
    _.map(this.state.trials, (trial, i) => {
      if (_.isNull(trial.submit_time) || _.isUndefined(trial.submit_time)) {
        this.setState({
          openTrial: true,
        });
      }
    });
    // console.log(res.data);
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      if (this.state.openTrial) {
        this.setState({
          openTrial: false,
        });
      }
      return <p>مهلت آزمون تمام شده است.</p>;
    }
    return (
      <>
        <p>
          مدت زمان باقی‌مانده این آزمون: {numberFarsi(hours)}:{numberFarsi(minutes)}:
          {numberFarsi(seconds)}
        </p>
      </>
    );
  };

  newTrial = async () => {
    const res = await getNewTrialAPI(
      this.props.token,
      this.props.cid,
      this.props.mid,
      this.props.tid,
    );

    // console.log(res.data);

    if (!_.isUndefined(res.data.detail)) {
      if (res.data.detail[0] === 'Cooling down time of trial not finished') {
        this.setState({
          error: `برای گرفتن آزمون جدید باید ${numberFarsi(
            this.state.data.trial_cooldown,
          )} ساعت از اتمام آزمون قبلی گذشته باشد.`,
        });
      }
      if (res.data.detail[0] === 'Task has no trial_recipe.') {
        this.setState({
          error: `هم اکنون امکان دریافت آزمون برای این محتوا وجود ندارد.`,
        });
      }
      if (res.data.detail[0] === 'Count limit of trials reached for this user') {
        this.setState({
          error: `تعداد آزمون‌های مجاز شما تمام شده است.`,
        });
      }
    }

    if (res.data.status_code === 200) {
      // console.log(
      //   `/dashboard/${this.props.cid}/${this.props.mid}/${this.props.tid}/${res.data.trial_id}`,
      // );
      localStorage.clear();
      Router.push(
        `/dashboard/${this.props.cid}/${this.props.mid}/${this.props.tid}/${res.data.trial_id}`,
        `/dashboard/${this.props.cid}/${this.props.mid}/${this.props.tid}/${res.data.trial_id}`,
        { shallow: false },
      );
      // history.go(0);
    }
  };

  content = () => {
    if (this.state.loading) {
      return <Loader active inline="centered" />;
    }

    let addButton = <></>;
    if (!this.state.openTrial) {
      addButton = (
        <>
          <Divider />
          <Button primary size="medium" floated="right" onClick={this.newTrial}>
            ایجاد آزمون جدید
          </Button>
        </>
      );
    }

    let info = <></>;
    if (this.state.data.trial_available) {
      info = (
        <Message
          info
          style={{
            textAlign: 'justify',
          }}
        >
          شما مجاز به دریافت{' '}
          {numberFarsi(this.state.data.max_trials_count - this.state.trials.length)} آزمون دیگر
          هستید. مدت زمان هر آزمون {numberFarsi(this.state.data.trial_time)} ساعت می‌باشد و پس از
          اتمام یک آزمون برای گرفتن آزمون بعدی باید {numberFarsi(this.state.data.trial_cooldown)}{' '}
          ساعت صبر کنید.
        </Message>
      );
    }

    let error = <></>;
    if (
      !_.isNull(this.state.error) &&
      !_.isUndefined(this.state.error) &&
      this.state.error !== ''
    ) {
      error = <Message negative>{this.state.error}</Message>;
    }

    let ind = 0;
    return (
      <Container pb={4}>
        {error}
        {info}
        {_.map(this.state.trials, (trial, i) => {
          // console.log(trial);
          if (_.isNull(trial.submit_time) || _.isUndefined(trial.submit_time)) {
          } else {
            ind = ind + 1;
            return (
              <Container key={this.props.tid + 'tr' + ind}>
                <Divider />
                <p
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  <a
                    href={`/dashboard/${this.props.cid}/${this.props.mid}/${this.props.tid}/${trial.id}`}
                  >
                    آزمون شماره‌ی {numberFarsi(ind)}
                  </a>
                </p>
                {trial.scored ? (
                  <p>امتیاز: {numberFarsi(_.round(trial.score, 2))}</p>
                ) : (
                  <p>امتیاز: در حال داوری ...</p>
                )}
              </Container>
            );
          }
        })}
        {_.map(this.state.trials, (trial, i) => {
          if (_.isNull(trial.submit_time) || _.isUndefined(trial.submit_time)) {
            let goToPageButton = (
              <Button primary size="medium" floated="right" onClick={() => localStorage.clear()}>
                ورود به صفحه‌ی آزمون
              </Button>
            );
            if (!this.state.openTrial) {
              goToPageButton = <></>;
            }
            ind = ind + 1;

            return (
              <Container key={this.props.tid + 'tr' + ind}>
                <Divider />
                <p
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  <a
                    href={`/dashboard/${this.props.cid}/${this.props.mid}/${this.props.tid}/${trial.id}`}
                  >
                    آزمون شماره‌ی {numberFarsi(ind)}
                  </a>
                </p>
                <Countdown
                  dir="ltr"
                  date={new Date(trial.due_time)}
                  renderer={this.renderer}
                  trial={trial}
                />
                <a
                  href={`/dashboard/${this.props.cid}/${this.props.mid}/${this.props.tid}/${trial.id}`}
                >
                  {goToPageButton}
                </a>
              </Container>
            );
          }
        })}
        {addButton}
      </Container>
    );
  };

  render() {
    // console.log(this.props);
    // console.log(this.state);

    const { activeIndex } = this.state;

    if (this.props.cid + '' === '2') {
      return <></>;
    }

    if (!this.props.content_finished) {
      return <></>;
    }

    return (
      <Container
        px={[2, 4, 4]}
        py={3}
        m={0}
        style={{
          backgroundColor: '#DFF1FF',
        }}
      >
        <Accordion dir="RTL">
          <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
            <Text
              style={{
                padding: 0,
                margin: 0,
              }}
            >
              <Icon name="dropdown" />
              آزمون‌
            </Text>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>{this.content()}</Accordion.Content>
        </Accordion>
      </Container>
    );
  }
}
