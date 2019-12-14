import React, { Component } from 'react';
import { Box } from 'rebass';
import styled from 'styled-components';
import {
  color,
  space,
  layout,
  flex,
  flexBasis,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignSelf,
  alignContent,
  shadow,
  typography,
} from 'styled-system';

const Section = styled('section')(color, space, layout, {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});
Section.defaultProps = { padding: '30px' };

export default Section;