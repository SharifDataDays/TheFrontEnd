// @flow
import { Component } from 'react';
import type { Node } from 'react';
import { breakpoints } from '~/theme';

type PropsType = {
  verySmall: Node,
  small: Node,
  medium: Node,
  large: Node,
};

type StateType = {
  windowWidth: number,
};

class Responsive extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      windowWidth: 0,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;

    this.setState({ windowWidth });
  }

  render(): Node {
    const { verySmall, small, medium, large } = this.props;
    const { windowWidth } = this.state;

    if (windowWidth < breakpoints.small) {
      return verySmall;
    }
    if (windowWidth >= breakpoints.small && windowWidth < breakpoints.medium) {
      return small;
    }
    if (windowWidth >= breakpoints.medium && windowWidth < breakpoints.large) {
      return medium;
    }
    return large;
  }
}

export default Responsive;
