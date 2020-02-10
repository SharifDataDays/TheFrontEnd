import React, { Component } from 'react';
import { Accordion, Icon, Dimmer, Loader, Segment, Divider, Button, Message } from 'semantic-ui-react';
import styled from 'styled-components';
import { space, layout, color, border, typography } from 'styled-system';
import { taskAPI, getNewTrialAPI } from '~/redux/api/dashboard';
import _ from 'lodash';
import Countdown from 'react-countdown';

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

export default class TrialAccardion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1,
      loading: true,
      trials: [],
      openTrial: true,
      openTrialFinished: false,
    };
    this.getData();
  }

  async getData() {
    const { cid, mid, tid, token } = this.props;
    const res = await taskAPI(cid, mid, tid, token);
    this.setState({
      loading: false,
      trials: res.data.trials,
      openTrial: false,
      data: res.data,
    });

    _.map(this.state.trials, (trial) => {
      if (_.isNull(trial.submit_time) || _.isUndefined(trial.submit_time)) {
        this.setState({
          openTrial: true,
        });
      }
    });
    console.log(res.data);
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <p>مهلت آزمون تمام شده است.</p>;
    }
    return (
      <>
        <p>
          مدت زمان باقی‌مانده این آزمون: {hours}:{minutes}:{seconds}
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
    console.log(res);
    if (
      !_.isUndefined(res.data.detail) &&
      res.data.detail[0] === 'Cooling down time of trial not finished'
    ) {
      this.setState({
        error:`برای گرفتن ترایال جدید باید ${this.state.data.trial_cooldown} ساعت از ترایال قبلی گذشته باشد.`,
      });
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
    
    return (
      <>
        {/* <p>{this.props.data.trial_cooldown}</p> */}
        {_.map(this.state.trials, (trial, i) => {
          if (_.isNull(trial.submit_time) || _.isUndefined(trial.submit_time)) {
            return (
              <>
                <Divider />
                <p>آزمون شماره‌ی {i + 1}</p>
                <Countdown
                  dir="ltr"
                  date={new Date(trial.due_time)}
                  renderer={this.renderer}
                  trial={trial}
                />
                <p>امتیاز: {trial.score}</p>
                <a
                  href={`/dashboard/${this.props.cid}/${this.props.mid}/${this.props.tid}/${trial.id}`}
                >
                  <Button primary size="medium" floated="right">
                    ورود به صفحه‌ی آزمون
                  </Button>
                </a>
              </>
            );
          } else {
            return (
              <>
                <Divider />
                <p>آزمون شماره‌ی {i + 1}</p>
                <p>امتیاز: {trial.score}</p>
              </>
            );
          }
        })}

        {addButton}
      </>
    );
  };

  render() {
    console.log(this.state);
    const { activeIndex } = this.state;

    if (!this.props.content_finished) {
      return <></>;
    }

    let error = <></>
    if(!_.isNull(this.state.error) && !_.isUndefined(this.state.error) && this.state.error !== "")
      {

        error = <Message >{this.state.error}</Message>
      }
    return (
      <Container
        px={[2, 4, 4]}
        py={3}
        m={0}
        style={{
          backgroundColor: '#d5e2ed',
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
            {error}
            
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>{this.content()}</Accordion.Content>
        </Accordion>
      </Container>
    );
  }
}
