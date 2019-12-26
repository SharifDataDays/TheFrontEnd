import React from 'react';
import Container from './container';

function Resource({ content }) {
  return <Container content={content.sections[0].markdown} />;
}

export default Resource;
