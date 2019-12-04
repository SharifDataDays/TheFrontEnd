import React from 'react';
import styled from 'styled-components';
import { border } from 'styled-system';
import { Button as RebassButton } from 'rebass/styled-components';

export const Button = styled(RebassButton)`
  ${border};
  cursor: pointer;
`;

export const Wrapper = styled.div`
  transition: fill 0.25s;

  ${Button}:hover & {
    fill: red;
  }
`;

export function HoverButton({ text }) {
  return (
    <Wrapper>
      <Button>{text}</Button>
    </Wrapper>
  );
}
