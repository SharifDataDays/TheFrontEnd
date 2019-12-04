// @flow
import React from 'react';
import type { Node } from 'react';
import { Heading } from 'rebass/styled-components';

type PropsType = {
  title: string,
  desc: string,
  date: string,
  rtl: boolean,
};

const DefaultProps = {
  title: '',
  desc: '',
  date: '',
  rtl: true,
};

function Header({ title, desc, date, rtl }: PropsType = DefaultProps): Node {
  const direction = rtl ? 'right' : 'left';

  return (
    <>
      <Heading fontSize={[4, 5, 6]} color="gray" mt={[3, 4, 5]} textAlign={direction}>
        {desc}
      </Heading>
      <Heading fontSize={[6, 7, 8]} fontWeight="bold" mt={[2, 2, 3]} textAlign={direction}>
        {title}
      </Heading>
      <hr size={2} />
      <Heading fontSize={[1, 2, 3]} color="gray" textAlign={direction}>
        {date}
      </Heading>
      <hr size={2} />
    </>
  );
}

export default Header;
