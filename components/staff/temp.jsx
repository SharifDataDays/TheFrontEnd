import _ from 'lodash';
import styled from 'styled-components';
import { space, color, border } from 'styled-system';
import { Tab } from 'semantic-ui-react';
import React, { useState } from 'react';

const Container = styled.div`
  ${space}
  ${color}
  ${border}
`;

const panes = [
  {
    menuItem: 'مشخصات',
    render: (props) => (
      <Tab.Pane attached={false}>
<p>hellp</p>
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'رمز عبور',
    render: (props) => (
      <Tab.Pane attached={false}>
        <p>hellp</p>
      </Tab.Pane>
    ),
  },
];

export default function Staff({ staffs }) {
  console.log(staffs);
  //   const [activeItem, setActiveItem] = useState(0);

  //   const handleItemClick = (e, { ind }) => setActiveItem(ind);

  return (
    <Container p={[2, 4, 4]}>
      <Tab
        dir="RTL"
        menu={{ secondary: true, pointing: true }}
        panes={panes}
        
      />
    </Container>
  );
}
