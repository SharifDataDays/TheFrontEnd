import React from 'react';
import { ThemeProvider } from 'styled-components';
import SmallCard from './smallCard';
import MediumCard from './smallCard';
import LargeCard from './smallCard';
import Responsive from '../global/reponsive';
import theme from '~/theme';

const Post = () => {
  return (
    <Responsive verySmall={SmallCard} small={SmallCard} medium={MediumCard} large={LargeCard} />
  );
};

export default Post;
