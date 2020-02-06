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
  <Grid.Column computer={10} mobile={15} tablet={15}>
    <div
      style={{
        background: 'url(/images/datas.jpeg)',
        backgroundSize: 'cover',
        height: ' 18rem',
        opacity: '.9',
        padding: '0px',
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Text style={{ color: '#ffeac2' }}>
        انجمن علمی دانشکده مهندسی کامپیوتر دانشگاه صنعتی شریف
      </Text>
      <Header as="h1" style={{ color: 'white' }}>
        {props.milestone.name} جدول رده‌بندی فاز
      </Header>
      <Header as="h4" style={{ color: 'white', marginTop: 0 }}>
        Data days دومین دوره‌ی مسابقات
      </Header>
    </div>
  </Grid.Column>
);

class ScoreBoard extends Component {
  constructor(props) {
    super(props);
    this.state = { padding: '0px !important' };
  
  }

  componentDidMount() {
    const width = window.innerWidth;
    const padding = width <= Responsive.onlyMobile.maxWidth ? '0px !important' : '!important';
    this.setState({ padding });
  }

  render() {
    const { padding } = this.state;

    const count = this.props.myteam.teams_count;
    //const count = 245;
    return (
      <>
        <Grid centered>
          <HeaderScoreBoard milestone={this.props.milestone} />
        </Grid>
        <Grid centered>
          <Grid.Column computer={10} mobile={15} tablet={15}>
            <Text
              marginTop=""
              style={{
                color: 'black',
                textAlign: 'right',
                backgroundColor: 'white',
              }}
            >
              تعداد تیم‌ها: {count} تیم
            </Text>
          </Grid.Column>
        </Grid>
        <Grid centered>
          <Grid.Column computer={10} mobile={15} tablet={15}>
            <NoSSR>
              {/* <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
                <Mobile data={example} />
              </Responsive> */}
              {/* minWidth={Responsive.onlyTablet.minWidth} */}
              <Responsive>
                <Laptab
                  milestone={this.props.milestone}
                  teams={this.props.teams}
                  tasks={this.props.tasks}
                  myteam={this.props.myteam}
                />
              </Responsive>
            </NoSSR>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default ScoreBoard;
