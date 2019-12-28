// @flow
import React from 'react';
import type { Node } from 'react';
import { Divider, Header as Heading } from 'semantic-ui-react';
import moment from 'jalali-moment';


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
      <Heading as="h2">{desc}</Heading>
      <Heading as="h1">{title}</Heading>
      <Heading as="h4">{moment.from(date, 'en').locale('fa').fromNow()}</Heading>
      <Divider />
    </>
  );
}

export default Header;
