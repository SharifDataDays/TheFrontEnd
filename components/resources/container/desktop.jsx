import React from 'react';
import { Grid, Responsive } from 'semantic-ui-react';
import Headers from '../headers';
import Sidebar from '../sidebar';
import Content from '~/components/global/mdx';

const getWidth = () => {
  const isSSR = typeof window === 'undefined';

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

function DesktopContainer({ children, content }) {
  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Grid centered>
        <Grid.Column computer={3} tablet={4}>
          <Headers content={content} />
        </Grid.Column>
        <Grid.Column computer={9} tablet={8}>
          <Content content={content} />
        </Grid.Column>
        <Grid.Column computer={4} tablet={4}>
          <Sidebar />
        </Grid.Column>
      </Grid>
    </Responsive>
  );
}

export default DesktopContainer;
