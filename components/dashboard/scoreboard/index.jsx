import React, { Component } from 'react';
import { Grid, Responsive } from 'semantic-ui-react';
import NoSSR from 'react-no-ssr';
import styled from 'styled-components';
import Laptab from './laptab';
import Mobile from './mobile';

const ScoreBoard = () => (
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
      <Grid.Column computer={10} mobile={14} tablet={16}>
        <NoSSR>
          <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
            <Mobile />
          </Responsive>
          <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <Laptab />
          </Responsive>
        </NoSSR>
      </Grid.Column>
    </Grid>
  </>
);

export default ScoreBoard;
