import React from 'react';
import Responsive from '../global/reponsive';
import FatherContainer from './fatherContainer';

export default function Container() {
  const black = 'black';
  const justifyContent = 'flex-start';
  const small = <FatherContainer width="95%" bg={black} justifyContent={justifyContent} mt="30%" />;
  const medium = <FatherContainer width="90%" bg="grey" justifyContent={justifyContent} mt="30%" />;
  const large = <FatherContainer width="85%" bg="blue" justifyContent={justifyContent} mt="10%" />;
  return <Responsive verySmall={small} small={medium} medium={large} large={large} />;
}
 