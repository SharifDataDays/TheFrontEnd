import React from 'react';
import Responsive from '../global/reponsive';
import LargeContainer from './largeContainer';
import MediumContainer from './mediumContainer';
import SmallContainer from './smallContainer';

export default function Container() {
  const justifyContent = 'flex-start';
  const small = <SmallContainer justifyContent={justifyContent} />;
  const medium = <MediumContainer justifyContent={justifyContent} />;
  const large = <LargeContainer justifyContent={justifyContent} />;
  return <Responsive verySmall={small} small={medium} medium={large} large={large} />;
}
