// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import { border, position } from 'styled-system';
import { Flex, Box } from 'rebass/styled-components';
import Responsive from '../responsive';

const defaultProps = {
  header: <></>,
  start: <></>,
  end: <></>,
  extras: <></>,
  visible: true,
};

const BorderedBox = styled(Box)`
  ${border};
  ${position};
  top: ${(props: { visible: boolean }): string => (props.visible ? '0' : '-200px')};
  transition: top 0.6s;
`;

function LargeNavbar({
  header,
  start,
  end,
  extras,
  visible,
}: {
  header: Node,
  start: Node,
  end: Node,
  extras: Node,
  visible: boolean,
} = defaultProps): Node {
  return (
    <BorderedBox
      visible={visible}
      position="fixed"
      width={1}
      borderBottom="1px solid"
      borderColor="#e2e2e2"
    >
      <Flex alignItems="center" px={6} py={1} bg="background">
        {header}
        {start}
        <Box mx="auto" />
        {end}
        {extras}
      </Flex>
    </BorderedBox>
  );
}

function SmallNavbar({
  header,
  start,
  end,
  extras,
  visible,
}: {
  header: Node,
  start: Node,
  end: Node,
  extras: Node,
  visible: boolean,
} = defaultProps): Node {
  return (
    <BorderedBox
      visible={visible}
      position="fixed"
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

function Navbar({
  header,
  start,
  end,
  extras,
  visible,
}: {
  header: Node,
  start: Node,
  end: Node,
  extras: Node,
  visible: boolean,
} = defaultProps): Node {
  const small = (
    <SmallNavbar header={header} start={start} end={end} extras={extras} visible={visible} />
  );
  const large = (
    <LargeNavbar header={header} start={start} end={end} extras={extras} visible={visible} />
  );
  return <Responsive verySmall={small} small={small} medium={large} large={large} />;
}

class HiddenNavbar extends Component {
  constructor(props) {
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
    const visible = prevScrollpos > currentScrollPos;

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
