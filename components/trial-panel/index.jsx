import React from 'react';
import { Responsive, Segment } from 'semantic-ui-react';
import NoSSR from 'react-no-ssr';
import HeaderMobile from './header-mobile';
import TrialMobile from './trials-mobile';
import HeaderDesktop from './header-desktop';
import TrialDesktop from './trials-desktop';

const Trials = () => (
  <NoSSR>
    <Responsive as={Segment} minWidth={320} maxWidth={700} basic>
      <HeaderMobile fontSizeHeader="30px" fontSizeContent="15px" />
      <TrialMobile fontSize="18px" />
    </Responsive>
    <Responsive as={Segment} minWidth={701} maxWidth={1020} basic>
      <HeaderMobile fontSizeHeader="35px" fontSizeContent="25px" />
      <TrialMobile fontSize="35px" />
    </Responsive>
    <Responsive as={Segment} minWidth={1021}>
      <HeaderDesktop />
      <TrialDesktop />
    </Responsive>
  </NoSSR>
);

export default Trials;
