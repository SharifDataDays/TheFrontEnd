import React from 'react';
import styled from 'styled-components';
import { color, border } from 'styled-system';
import { Button as RebassButton } from 'rebass/styled-components';

export const Button = styled(RebassButton)`
  ${border};
  cursor: pointer;

  &:focus {
    outline: 0;
  }
`;

const HoverTrigger = styled.div`
  ${Button} {
    transition: background-color 0.25s, color 0.25s, border-color 0.25s ease;
  }

  ${Button}:hover {
    ${color};
    ${border};
    transition: background-color 0.25s, color 0.25s, border-color 0.25s ease;
  }
`;

export function NavbarButton({ text }) {
  return (
    <HoverTrigger color="primary" bg="background" borderBottom="1px solid" borderColor="background">
      <Button color="text" bg="background" borderBottom="1px solid" borderColor="background">
        {text}
      </Button>
    </HoverTrigger>
  );
}

export function LoginButton({ text }) {
  return (
    <HoverTrigger
      color="background"
      bg="primary"
      border="1px solid"
      borderColor="primary"
      borderRadius={3}
    >
      <Button
        color="text"
        bg="background"
        border="1px solid"
        borderColor="primary"
        borderRadius={3}
      >
        {text}
      </Button>
    </HoverTrigger>
  );
}
