// @flow
import React from 'react';
import type { Node } from 'react';
import Link from 'next/link';
import NavItem from './item';

function NavLink(props: { href: string, children: Node }): Node {
  const { href, children } = props;
  return (
    <Link href={href}>
      <a href={href}>
        <NavItem>{children}</NavItem>
      </a>
    </Link>
  );
}

export default NavLink;
