import React from 'react';
import { Link as RebassLink } from 'rebass';
import styled from 'styled-components';
import css from '@styled-system/css';

const Link = styled(RebassLink)(
  css({
    color: '#95d1fc',
    textDecoration: 'none',
    fontFamily: 'Arial',
    '&:hover': {
      color: '#269aed',
    },
  }),
);

export default Link;
