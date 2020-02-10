import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import NoSSR from 'react-no-ssr';
import { Divider, Image, Grid, Header as H, Responsive } from 'semantic-ui-react';
import { Zoom, Fade } from 'react-reveal';
import _ from 'lodash';

const Container = styled.div`
  ${space};
  background-color: #202020;
`;

const Header = styled(H)`
  color: white;
`;

function ContestContainer({contests}) {
  return (
    <Container py={[5, 6, 6]}>
        
    </Container>
  );
}

export default ContestContainer;
