import React, { Component } from 'react';
import { Grid, Responsive, Header } from 'semantic-ui-react';
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
            <p style={{ color: 'white', marginTop: '2rem', opacity: '1' }}>
              انجمن علمی دانشکده مهندسی کامپیوتر
            </p>
            <Header as='h2' style={{ color: 'white', opacity: '1' }}>
              Data days جدول رده‌بندی فاز اول دومین دوره از مسابقات{' '}
            </Header>
            <p style={{ color: 'white', marginTop: '6rem', opacity: '1' }}>
              تعداد شرکت کننده‌ها : 763 نفر
            </p>
          </Grid.Column>
        </Grid>
        <Grid centered style={{ marginTop: '5rem' }}>
          <Grid.Column computer={10} mobile={15} tablet={15} style={{ padding }}>
            <NoSSR>
              <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
                <Mobile data={example} />
              </Responsive>
              <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Laptab data={example} />
              </Responsive>
            </NoSSR>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default ScoreBoard;
