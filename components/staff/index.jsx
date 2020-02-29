import _ from 'lodash';
import styled from 'styled-components';
import { space, color, border } from 'styled-system';
import { Menu } from 'semantic-ui-react';
import React, { useState } from 'react';
import Team from './team';

const Container = styled.div`
  ${space}
  ${color}
  ${border}
`;

export default function Staff({ staffs }) {
  console.log(staffs);
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (e, { ind }) => setActiveItem(ind);

  return (
    <Container p={[2, 4, 4]}>
      <Menu pointing secondary dir="RTL" floated vertical>
        {_.map(staffs, (team, ind) => {
          console.log(team);
          return (
            <Menu.Item
              name={team.title_fa}
              ind={ind}
              active={activeItem === ind}
              onClick={handleItemClick}
            />
          );
        })}
      </Menu>
      <Team team={staffs[activeItem]}></Team>
    </Container>
  );
}
