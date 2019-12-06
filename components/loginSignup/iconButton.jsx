import React, { Component } from 'react';
import styled from 'styled-components';
import { Text } from 'rebass';
import { Button as Rebassbutton, text } from 'rebass/styled-components';
import css from '@styled-system/css';
import { Switch } from '@rebass/forms';

export const Button = styled(Rebassbutton)(
  css({
    cursor: 'pointer',
    backgroundColor: 'transparent',
    width: '100%',
    marginTop: 1,
    marginBottom: 1,
    border: '1px solid #95d1fc',
    outline: 'none',

    '&:hover': {
      borderColor: '#033b99',
    },
  }),
);

export const IconButton = ({ text, children }) => {
  return (
    <Button>
      <div>
        {text}
        {children}
      </div>
    </Button>
  );
};
