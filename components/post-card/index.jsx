import React from 'react';
import Responsive from '../global/reponsive';
import SmallCard from './smallCard';
import MediumCard from './mediumCard';
import LargeCard from './largeCard';

const Post = () => {
  return (
    <Responsive verySmall={SmallCard} small={SmallCard} medium={MediumCard} large={LargeCard} />
  );
};

export default Post;
