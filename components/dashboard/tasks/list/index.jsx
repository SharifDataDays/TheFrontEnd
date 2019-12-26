import React from 'react';
import NoSSR from 'react-no-ssr';
import { Responsive } from 'semantic-ui-react';
import Mobile from './mobile';
import Desktop from './desktop';

function ListSection({ tasks }) {
  return (
    <NoSSR>
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Mobile tasks={tasks} />
      </Responsive>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Desktop tasks={tasks} />
      </Responsive>
    </NoSSR>
  );
}

export default ListSection;
