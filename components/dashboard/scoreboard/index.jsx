import React, { Component } from 'react';
import { Grid, Responsive, Header } from 'semantic-ui-react';
import NoSSR from 'react-no-ssr';
import styled from 'styled-components';
import Laptab from './laptab';
import Mobile from './mobile';
import example from '~/public/static/locales/test-scoreboard/scoreboard.json';

const Text = styled.p`
  color: white;
  margin-top: ${(props) => props.marginTop} !important;
`;

const HeaderScoreBoard = (props) => (
  <Grid.Column
    style={{
      background: 'url(/images/datas.jpeg)',
      backgroundSize: 'cover',
      height: ' 18rem',
      opacity: '.9',
    }}
    computer={10}
    mobile={15}
    tablet={16}
    textAlign='left'
  >
    {' '}
    <Text marginTop='2rem'>انجمن علمی دانشکده مهندسی کامپیوتر دانشگاه صنعتی شریف</Text>
    <Header as='h2' style={{ color: 'white' }}>
      Data days از دومین دوره‌ی مسابقات {props.milestone.name} جدول رده‌بندی فاز
    </Header>
    <Text marginTop="6rem">تعداد سابمیت‌کننده‌ها : 763 نفر</Text>
  </Grid.Column>
);

class ScoreBoard extends Component {
  constructor (props) {
    super(props);
    this.state = { padding: '0px !important' };
  }

  componentDidMount () {
    const width = window.innerWidth;
    const padding = width <= Responsive.onlyMobile.maxWidth ? '0px !important' : '!important';
    this.setState({ padding });
  }

  render () {
    const { padding } = this.state;
    return (
      <>
        <Grid centered>
          <HeaderScoreBoard milestone={this.props.milestone} />
        </Grid>
        <Grid centered style={{ marginTop: '5rem' }}>
          <Grid.Column computer={10} mobile={15} tablet={15} style={{ padding }}>
            <NoSSR>
              {/* <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
                <Mobile data={example} />
              </Responsive> */}
              {/* minWidth={Responsive.onlyTablet.minWidth} */}
              <Responsive >
                <Laptab milestone={this.props.milestone} teams={this.props.teams} tasks={this.props.tasks} />
              </Responsive>
            </NoSSR>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default ScoreBoard;
