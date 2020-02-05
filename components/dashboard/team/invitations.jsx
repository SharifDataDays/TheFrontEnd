import _ from 'lodash';
import styled from 'styled-components';
import { space, layout, color, border, typography, flex } from 'styled-system';
import {
  Header,
  List,
  Input,
  Divider,
  Button,
  Grid,
  Form,
  Message,
  Popup,
} from 'semantic-ui-react';
import { Fade } from 'react-reveal';

const Label = styled.label`
  ${space}
  ${layout}
  ${typography}
  ${color}
`;

const Container = styled.div`
  ${space}
  ${color}
  ${border}
`;

const Text = styled.text`
  ${color}
`;

export default function Invitations({ token, teamData, finilized }) {
  return (
    <>
      <Header size="huge" dir="RTL">
        درخواست‌ها
      </Header>

      <Grid dir="RTL">
        <Grid.Column
          verticalAlign="middle"
          style={{
            marginTop: '20px',
            border: '1px solid #d1d1d1',
            borderRadius: '10px',
          }}
        >
          <Grid.Row></Grid.Row>
        </Grid.Column>
      </Grid>
    </>
  );
}
