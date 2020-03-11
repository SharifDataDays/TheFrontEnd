import React, { Component } from 'react';
import { Grid, Responsive, Header,  Container as C } from 'semantic-ui-react';
import NoSSR from 'react-no-ssr';
import styled from 'styled-components';
import Laptab from './laptab';
import Mobile from './mobile';
import example from '~/public/static/locales/test-scoreboard/scoreboard.json';
import persianJs from 'persianjs';
import { space, color, border } from 'styled-system';

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
    <div
      style={{
        background: 'url(/images/datas.jpeg)',
        backgroundSize: 'cover',
        height: ' 18rem',
        // opacity: '.9',
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
        جدول رده‌بندی {props.milestone.name}
      </Header>
      <Header as="h4" style={{ color: 'white', marginTop: 0 }}>
        DataDays دومین دورهٔ رویداد
      </Header>
    </div>
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
      <>
      {/* <Container
        px={[2, 4, 6]}
        pt={6}
        pb={6}
        style={{
          backgroundImage:
            'linear-gradient(to bottom, #101010, #141414, #171717, #1a1a1a, #202020)',
          // paddingTop: '90px',

          minHeight: 'calc(100vh - 333px)',
        }}
        fluid
      > */}
      <Container
        //  py={[5, 6, 6]}
        px={[1, 4, 4]}
        pt={5}
        style={{
          backgroundImage: "url('/images/scoreboard.png')",
          backgroundPosition: "right",

          backgroundSize: 'cover',
           backgroundImage: 'linear-gradient(to bottom, #101010, #141414, #171717, #1a1a1a, #303030)',
          backgroundRepeat: 'true',
          minHeight: 'calc(100vh - 333px)',


        }}
              fluid
      >
        
        <Grid centered style={{padding: 0, margin: 0}}>
          <HeaderScoreBoard milestone={this.props.milestone} />
     
          <Grid.Column computer={11} mobile={15} tablet={15}>
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
                  paddingRight: '10px'
                }}
              >
                رتبه‌ی شما: {numberFarsi(this.props.myteam.myRank)}
              </Text>
            )}
          </Grid.Column>
     
          <Grid.Column computer={11} mobile={15} tablet={15}>
            {/* <NoSSR> */}
              {/* <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
                <Mobile data={example} />
              </Responsive> */}
              {/* minWidth={Responsive.onlyTablet.minWidth} */}
              {/* <Responsive> */}
                <Laptab
                  milestone={this.props.milestone}
                  teams={this.props.teams}
                  tasks={this.props.tasks}
                  myteam={this.props.myteam}
                />
              {/* </Responsive> */}
            {/* </NoSSR> */}
          </Grid.Column>
        </Grid>
        </Container>
      {/* </Container> */}
      </>
    );
  }
}

export default ScoreBoard;
