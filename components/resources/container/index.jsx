import React from 'react';
import DesktopContainer from './desktop';
import MobileContainer from './mobile';

const ResponsiveContainer = ({ children, content }) => (
  <div>
    <DesktopContainer content={content}>{children}</DesktopContainer>
    <MobileContainer content={content}>{children}</MobileContainer>
  </div>
);

export default ResponsiveContainer;
