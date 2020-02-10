import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import NoSSR from 'react-no-ssr';
import { Divider, Image, Grid, Header as H, Responsive } from 'semantic-ui-react';
import { Zoom, Fade } from 'react-reveal';
import _ from 'lodash';
import Box from './box';

const Container = styled.div`
  ${space};
  background-color: #202020;
  color: white;
`;

const Header = styled(H)`
  color: white;
`;

function ContestContainer({contests}) {
  return (
    <Container py={[5, 6, 6]} px={5} >
        <Grid columns={3}  celled='internally' inverted dir="RTL">
          <Grid.Row
          py={4}
          px={4}
          style={{
            display: "flex",
            alignItems: "stretch",
            alignContent: "center",
            justifyContent: "center",
          }}>
            <Box contest={contests[0]}></Box>
            <Box contest={contests[0]}></Box>
            <Box contest={contests[0]}></Box>
          </Grid.Row>
        </Grid>
        
    </Container>
  );
}

export default ContestContainer;
