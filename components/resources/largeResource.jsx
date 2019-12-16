import React from 'react';
import { Rail, Ref, Sticky, Grid, Segment, Sidebar, List, Input, Header } from 'semantic-ui-react';
import LargeSideBar from './largeSideBar';
import Post from '~/components/blog/post';

const mdx = `
# react-markdown
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pellentesque pulvinar pellentesque habitant morbi. Mauris augue neque gravida in. Aliquam id diam maecenas ultricies mi eget mauris. Turpis massa sed elementum tempus egestas. Consequat ac felis donec et odio pellentesque diam. Amet massa vitae tortor condimentum lacinia. Nullam non nisi est sit amet facilisis magna etiam. Est lorem ipsum dolor sit. Nunc scelerisque viverra mauris in. Mattis pellentesque id nibh tortor id aliquet. Sit amet facilisis magna etiam tempor. Sed blandit libero volutpat sed cras ornare arcu. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit.

Neque gravida in fermentum et sollicitudin. Nam libero justo laoreet sit amet. Dignissim cras tincidunt lobortis feugiat vivamus at. Eu augue ut lectus arcu bibendum at varius vel. Elit pellentesque habitant morbi tristique senectus et. Ac tincidunt vitae semper quis lectus nulla at. Non consectetur a erat nam at. A pellentesque sit amet porttitor. Sodales ut etiam sit amet nisl purus in mollis. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Gravida arcu ac tortor dignissim convallis. Augue neque gravida in fermentum et sollicitudin. Malesuada fames ac turpis egestas maecenas. Enim ut sem viverra aliquet eget. Arcu cursus euismod quis viverra nibh cras. Vestibulum mattis ullamcorper velit sed ullamcorper.

A iaculis at erat pellentesque. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Duis ultricies lacus sed turpis tincidunt id aliquet. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. Bibendum at varius vel pharetra vel. Augue lacus viverra vitae congue eu consequat ac felis donec. At quis risus sed vulputate odio ut enim. Auctor elit sed vulputate mi sit amet mauris commodo. Nunc sed blandit libero volutpat sed. Morbi tincidunt ornare massa eget egestas purus viverra.
`;

function PostPage() {
  return (
    <Post
      image="https://source.unsplash.com/random/1024x768?ai"
      header={{
        title: 'Who Owns Financial Data?',
        desc: 'The story of data - part 1',
        date: 'November 18, 2018',
      }}
      content={mdx}
      comments={2}
    />
  );
}

const Resource = () => (
  <Grid>
    <Grid.Column style={{width: '70%'}}>
      <PostPage />
    </Grid.Column>
    <Grid.Column>
      <LargeSideBar />
    </Grid.Column>
  </Grid>
);

export default Resource;
