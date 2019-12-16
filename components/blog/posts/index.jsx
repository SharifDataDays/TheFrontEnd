import _ from 'lodash';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import Post from './post';

const posts = [
  {
    title: 'The Ultimate Guide to Improving Your Productivity!',
    categorise: 'BLOG',
    dir: 'ltr',
    contentSummary:
      "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires. The process is straightforward. Indicate the number of random questions you want to see and then click on the Generate Random Questions button. You will instantly see a random assortment of questions corresponding to the number you indicated you wanted to see. There are a number of ways random questions can be useful.",
    topicImage: 'programming',
  },
  {
    title: 'Random Love Lyrics Generator by AI',
    categorise: 'AI',
    dir: 'ltr',
    contentSummary:
      "I'm gonna love you when the fire's burning I'm gonna love you when this place is sweet All that we are holding A love so beautiful as this Pre-Chorus I can make you my lover I can make you my lover ",
    topicImage: 'love',
  },
  {
    title: 'Its gonna be LEGENDARY',
    categorise: 'NEWS',
    dir: 'ltr',
    contentSummary:
      'According to the caption on the bronze marker placed by the Multnomah Chapter of the Daughters of the American Revolution on May 12, 1939, “College Hall (is) the oldest building in continuous use for Educational purposes west of the Rocky Mountains. Here were educated men and women who have won recognition throughout the world in all the learned professions.',
    topicImage: 'scrum',
  },
  {
    title: 'No Idea what is the topic',
    categorise: 'STUFFS',
    dir: 'ltr',
    contentSummary:
      'One dollar and eighty-seven cents. That was all. And sixty cents of it was in pennies. Pennies saved one and two at a time by bulldozing the grocer and the vegetable man and the butcher until one’s cheeks burned with the silent imputation of parsimony that such close dealing implied. One dollar and eighty-seven cents. And the ',
    topicImage: 'productivity',
  },
  {
    title: 'Learning ReactJS',
    categorise: 'DOCUMENT',
    dir: 'ltr',
    contentSummary:
      'We don’t recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state. Check out Robin Pokorny’s article for an in-depth explanation on the negative impacts of using an index as a key. If you choose not to assign an explicit key to list items then React will default to using indexes as keys. Here is an in-depth explanation about why keys are necessary if you’re interested in learning more. ',
    topicImage: 'notebook',
  },
];

function Posts() {
  return (
    <Grid style={{ margin: 0 }} centered>
      <Grid.Column width={8} computer={8} tablet={10} mobile={15}>
        {_.map(posts, (post) => {
          return <Post {...post} />;
        })}
      </Grid.Column>
    </Grid>
  );
}

export default Posts;
