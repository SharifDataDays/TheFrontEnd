import React, { Component } from 'react';
import { Grid, Responsive } from 'semantic-ui-react';
import NoSSR from 'react-no-ssr';
import Laptab from './laptab';
import Mobile from './mobile';
import example from '~/public/static/locales/test-scoreboard/scoreboard.json';

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
          <Grid.Column
            style={{ background: 'green', height: ' 20rem' }}
            computer={10}
            mobile={15}
            tablet={16}
          ></Grid.Column>
        </Grid>
        <Grid centered style={{ marginTop: '5rem' }}>
          <Grid.Column computer={10} mobile={15} tablet={16} style={{ padding }}>
            <NoSSR>
              <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
                <Mobile data={example} />
              </Responsive>
              <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Laptab />
              </Responsive>
            </NoSSR>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default ScoreBoard;
