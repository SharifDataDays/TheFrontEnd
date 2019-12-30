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

function Header({ title, desc, date }: PropsType = DefaultProps): Node {
  return (
    <>
      <Heading style={{ direction: 'rtl' }} as="h2">
        {desc}
      </Heading>
      <Heading style={{ direction: 'rtl' }} as="h1">
        {title}
      </Heading>
      <Heading style={{ direction: 'rtl' }} as="h4">
        {moment
          .from(date, 'en')
          .locale('fa')
          .fromNow()}
      </Heading>
      <Divider />
    </>
  );
}

export default Header;
