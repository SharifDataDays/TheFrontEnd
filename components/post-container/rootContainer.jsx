import React from 'react';
import { Flex } from 'rebass/styled-components';
import Post from '../post-card/smallCard';

export default function LargeContainer({ justifyContent, width, mt, con }) {
  const width = '95%';
  const mt = '30%';
  const content =
    'reproductive rights publication asking the question “just what is this body?” and sharing work that brings current issues to the forefront from narratives that are often overlooked. If you have a fully written piece or story that ';
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
      <Post
        justifyContent={justifyContent}
        title="The Ultimate Guide to Improving Your Productivity!"
        categorise="BLOG"
        dir="ltr"
        contentSummary={content}
      />
      <Post
        justifyContent={justifyContent}
        title="August Update From the Partner Program"
        categorise="BLOG"
        contentSummary="In “My Friend Posted a Violent Manifesto on Facebook,” Michael R. McBride writes about the experience of witnessing mental breakdowns on social media. “I was first struck by the headline, but when I read the piece I was really drawn to how thoughtful it was,” shares OneZero Platform Editor Megan Morrone. “It really touches on one of OneZero’s most important missions — to write about how tech is changing us in so many unexpected ways. It’s an experience that many of us have probably had before. Although"
      />
      <Post
        justifyContent={justifyContent}
        title="PyTorch 1.3 adds mobile, privacy, quantization, and named tensors"
        categorise="NEWS"
        contentSummary="The only pre-requisite to enter this competition is familiarity with programming using C++, Java or python. But obviously, knowledge of algorithmic thinking and artificial intelligence will be a great asset for any of the participating teams. The registration for online competition is free."
      />
      <Post
        justifyContent={justifyContent}
        title="A Complete Guide to Flexbox"
        categorise="DOCS"
        contentSummary="I’ve got only a question. When you define main-axis you say that its direction depends on the justify-content property, but isn’t the flex-direction property that defines if flex items are layed out as a row or as a column? Am I misunderstanding something?"
      />
    </Flex>
  );
}
