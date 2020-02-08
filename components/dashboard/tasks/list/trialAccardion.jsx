import React, { Component } from 'react';
import { Accordion, Icon, Dimmer, Loader, Segment, Divider, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import { space, layout, color, border, typography } from 'styled-system';
import { taskAPI } from '~/redux/api/dashboard';
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
      activeIndex: 0,
      loading: true,
      trials: [],
    };
  }

  async componentDidMount() {
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
     
      return (
        <p>
        مهلت آزمون تمام شده است.
      </p>
      )
    }
    return (
      <p>
        مدت زمان باقی‌مانده این آزمون: {hours}:{minutes}:{seconds}
      </p>
    );
  };

  newTrial = () => {};

  content = () => {
    if (this.state.loading) {
      return (
        //<Segment>
        <Loader active inline="centered" />
        //</Segment>
      );
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
        {_.map(this.state.trials, (trial, i) => {
          if (_.isNull(trial.submit_time) || _.isUndefined(trial.submit_time)) {
            return (
              <>
                <Divider />
                <p>آزمون شماره‌ی {i + 1}</p>
                <Countdown dir="ltr" date={new Date(trial.due_time)} renderer={this.renderer} />
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
                <Countdown dir="ltr" date={new Date(trial.due_time)} renderer={this.renderer} />
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

    return (
      <Container
        px={[2, 4, 4]}
        py={3}
        m={0}
        style={{
          backgroundColor: 'rgba(29, 147, 247,0.2)',
          backgroundColor: '#d5e2ed',
        }}
      >
        <Accordion dir="RTL">
          <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
            <Text>
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
