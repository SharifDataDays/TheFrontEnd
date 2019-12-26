import React from 'react';
import NoSSR from 'react-no-ssr';
import { Responsive } from 'semantic-ui-react';
import Mobile from './mobile';
import Desktop from './desktop';

function TrialSection() {
  return (
    <NoSSR>
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Mobile />
      </Responsive>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Desktop />
      </Responsive>
    </NoSSR>
  );
}

export default TrialSection;
