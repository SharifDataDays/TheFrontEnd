// @flow
import React from 'react';
import type { Node } from 'react';
import Body from './body';
import HeaderImage from './headerImage';
import Header from './header';
// import Comments from './comments';
import Content from '~/components/global/mdx';

type PropsType = {
  image: string,
  header: { title: string, desc: string, date: string },
  content: string,
  comments: number,
};

function Post({ image, header, content, comments }: PropsType): Node {
  const { title, desc, date } = header;
  return (
    <>
      <Body>
        <HeaderImage url={image} />
        <Header title={title} desc={desc} date={date} />
        <Content content={content} />
      </Body>
      {/* <Body bg="muted">
        <Comments count={comments} />
      </Body> */}
    </>
  );
}

export default Post;
