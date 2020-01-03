import React from 'react';
import styled from 'styled-components';
import { Form } from 'semantic-ui-react';

const Text = styled.p`
  font-size: 1.5rem;
  direction: rtl;
  line-height: 1.25;
`;

export function FormAnswer({ description, fields }) {
  return (
    <>
      <Text>{description}</Text>
    </>
  );
}
