import React from 'react';
import { Flex } from 'rebass/styled-components';
import Post from '../post-card/mediumCard';
import MyData from '~/public/posts/postEn.json';

function generatePosts() {
  const posts = MyData.map((post) => (
    <Post
      justifyContent="start-end"
      title={post.title}
      categorise={post.categorise}
      dir={post.dir}
      contentSummary={post.contentSummary}
    />
  ));
  return <>{posts}</>;
}

export default function LargeContainer({ justifyContent }) {
  const width = '95%';
  const mt = '10%';
  return (
    <Flex
      flexDirection="row"
      flexWrap="wrap"
      justifyContent={justifyContent}
      width={width}
      height="100%"
      m="0 auto"
      mt={mt}
    >
      {generatePosts()}
    </Flex>
  );
}
