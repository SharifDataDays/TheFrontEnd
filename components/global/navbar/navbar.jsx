// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import { border, position } from 'styled-system';
import { Flex, Box } from 'rebass/styled-components';
import Responsive from '../responsive';

const BorderedBox = styled(Box)`
  ${border};
  ${position};
  top: ${(props: { visible: boolean }): string => (props.visible ? '0' : '-200px')};
  transition: top 0.6s;
`;

const InnerBox = styled(Flex)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
`;

type NavbarType = {
  header: Node,
  start: Node,
  end: Node,
  extras: Node,
  visible: boolean,
};

const NavbarDefaultProps = {
  header: <></>,
  start: <></>,
  end: <></>,
  extras: <></>,
  visible: true,
};

function LargeNavbar({
  header,
  start,
  end,
  extras,
  visible,
}: NavbarType = NavbarDefaultProps): Node {
  return (
    <BorderedBox
      position="fixed"
      visible={visible}
      height={96}
      width={1}
      borderBottom="1px solid"
      borderColor="#e2e2e2"
      bg="background"
    >
      <InnerBox alignItems="center" px={6} py={1} bg="background" verticalAlign="middle">
        {header}
        {start}
        <Box mx="auto" />
        {end}
        {extras}
      </InnerBox>
    </BorderedBox>
  );
}

function SmallNavbar({
  header,
  start,
  end,
  extras,
  visible,
}: NavbarType = NavbarDefaultProps): Node {
  return (
    <BorderedBox
      position="fixed"
      visible={visible}
      width={1}
      borderBottom="1px solid"
      borderColor="#e2e2e2"
    >
      <Flex alignItems="center" px={3} py={0} bg="background">
        {header}
        <Box mx="auto" />
        {extras}
      </Flex>
      <Flex alignItems="center" px={0} py={0} bg="background">
        <Box display="inline-block">
          {start}
          {end}
        </Box>
      </Flex>
    </BorderedBox>
  );
}

function Navbar({ header, start, end, extras, visible }: NavbarType = NavbarDefaultProps): Node {
  const small = (
    <SmallNavbar header={header} start={start} end={end} extras={extras} visible={visible} />
  );
  const large = (
    <LargeNavbar header={header} start={start} end={end} extras={extras} visible={visible} />
  );
  return <Responsive verySmall={small} small={small} medium={large} large={large} />;
}

type HiddenNavbarPropsType = {
  header: Node,
  start: Node,
  end: Node,
  extras: Node,
};

type HiddenNavbarStateType = {
  prevScrollpos: number,
  visible: boolean,
};

const HiddenNavbarDefaultProps = {
  header: <></>,
  start: <></>,
  end: <></>,
  extras: <></>,
};

class HiddenNavbar extends Component<HiddenNavbarPropsType, HiddenNavbarStateType> {
  constructor(props: HiddenNavbarPropsType = HiddenNavbarDefaultProps) {
    super(props);

    this.state = {
      prevScrollpos: 0,
      visible: true,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { prevScrollpos } = this.state;
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos || currentScrollPos < 96;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    });
  }

  render(): Node {
    const { header, start, end, extras } = this.props;
    const { visible } = this.state;
    return <Navbar header={header} start={start} end={end} extras={extras} visible={visible} />;
  }
}

export default HiddenNavbar;
