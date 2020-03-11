import React, { Component } from 'react';
import { Grid, Responsive, Header, Container as C } from 'semantic-ui-react';
import NoSSR from 'react-no-ssr';
import styled from 'styled-components';
import Laptab from './laptab';
import Mobile from './mobile';
import example from '~/public/static/locales/test-scoreboard/scoreboard.json';
import persianJs from 'persianjs';
import { space, color, border } from 'styled-system';
import { Zoom, Fade } from 'react-reveal';

const Container = styled(C)`
  ${space}
  ${color}
  ${border}

`;
const Text = styled.p`
  color: white;
  margin-top: ${(props) => props.marginTop} !important;
`;

const HeaderScoreBoard = (props) => (
  <Grid.Column computer={11} mobile={15} tablet={15}>
    <Fade top>
      <div
        style={{
          // background: 'url(/images/datas.jpeg)',
          // backgroundSize: 'cover',
          //height: ' 18rem',
          // opacity: '.9',
          paddingTop: '30px',
          marginBottom: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Text style={{ color: '#1d93f7', paddingBottom: 0, marginBottom: 0 }}>
          انجمن علمی دانشکده مهندسی کامپیوتر دانشگاه صنعتی شریف
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: '30px',
            paddingTop: '15px',
            paddingBottom: '10px',
            marginBottom: 0,
          }}
        >
          جدول رده‌بندی {props.milestone.name}
        </Text>

        <Text style={{ color: '#1d93f7', fontSize: '18px' }}>DataDays دومین دورهٔ رویداد</Text>
      </div>
    </Fade>
  </Grid.Column>
);

const numberFarsi = (number) => {
  if (_.isUndefined(number) || _.isNull(number)) return;
  return persianJs(number.toString())
    .englishNumber()
    .toString();
};

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
    //  console.log(this.props);
    const count = this.props.myteam.teams_count;
    //const count = 245;
    return (
      <Container
        //  py={[5, 6, 6]}
        px={[1, 4, 4]}
        pt={5}
        style={{
          //backgroundImage: "url('/images/scoreboard.png')",
          //backgroundImage: 'linear-gradient(to bottom, #101010, #141414, #171717, #1a1a1a, #303030)',
          backgroundColor: '#191919',
          backgroundPosition: 'right',
          backgroundSize: 'cover',
          backgroundRepeat: 'true',
          minHeight: 'calc(100vh - 333px)',
        }}
        fluid
      >
        <Grid centered style={{ padding: 0, margin: 0 }}>
          <HeaderScoreBoard milestone={this.props.milestone} />

          <Grid.Column computer={11} mobile={15} tablet={15}>
            <Fade top>
              {/* <Text
              marginTop=""
              style={{
                color: 'white',
                textAlign: 'right',
              }}
            >
              تعداد تیم‌ها: {numberFarsi(count)} تیم
            </Text> */}
              {this.props.myteam.myRank === 0 ? (
                <></>
              ) : (
                <Text
                  marginTop=""
                  style={{
                    color: 'white',
                    textAlign: 'right',
                    paddingRight: '10px',
                  }}
                >
                  رتبه‌ی شما: {numberFarsi(this.props.myteam.myRank)}
                </Text>
              )}
            </Fade>
          </Grid.Column>

          <Grid.Column computer={11} mobile={15} tablet={15}>
            {/* <NoSSR> */}
            {/* <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
                <Mobile data={example} />
              </Responsive> */}
            {/* minWidth={Responsive.onlyTablet.minWidth} */}
            {/* <Responsive> */}
            <Fade bottom>
              <Laptab
                milestone={this.props.milestone}
                teams={this.props.teams}
                tasks={this.props.tasks}
                myteam={this.props.myteam}
              />
            </Fade>
            {/* </Responsive> */}
            {/* </NoSSR> */}
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default ScoreBoard;
