import React from 'react';
import { Rail, Ref, Sticky, Grid, Segment, Sidebar, List, Input, Header } from 'semantic-ui-react';
import LargeSideBar from './largeSideBar';
import Post from '~/components/blog/post';

function filterHeaders(content) {
  const h1Headers = /# .+/g;
  const headers1 = content.match(h1Headers);
  let headersH1 = null;
  if (headers1 !== null) {
    headersH1 = headers1.map((x) => x.split(' ')[1]);
  }
  const h2Headers = /#{2, } \w+/g;
  const headers2 = content.match(h2Headers);
  let headersH2 = null;
  if (headers2 !== null) {
    headersH2 = headers2.map((x) => x.split(' ')[1]);
  }

  return { h1: headersH1, h2: headersH2 };
}

const mdx = `
# [React](https://reactjs.org/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react) [![CircleCI Status](https://circleci.com/gh/facebook/react.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/facebook/react) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

React is a JavaScript library for building user interfaces.

* **Declarative:** React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.
* **Component-Based:** Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
* **Learn Once, Write Anywhere:** We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using [React Native](https://facebook.github.io/react-native/).

[Learn how to use React in your own project](https://reactjs.org/docs/getting-started.html).

## Installation

React has been designed for gradual adoption from the start, and **you can use as little or as much React as you need**:

* Use [Online Playgrounds](https://reactjs.org/docs/getting-started.html#online-playgrounds) to get a taste of React.
* [Add React to a Website](https://reactjs.org/docs/add-react-to-a-website.html) as a  tag in one minute.
* [Create a New React App](https://reactjs.org/docs/create-a-new-react-app.html) if you're looking for a powerful JavaScript toolchain.


## Documentation

You can find the React documentation [on the website](https://reactjs.org/docs).  

Check out the [Getting Started](https://reactjs.org/docs/getting-started.html) page for a quick overview.

The documentation is divided into several sections:

* [Tutorial](https://reactjs.org/tutorial/tutorial.html)
* [Main Concepts](https://reactjs.org/docs/hello-world.html)
* [Advanced Guides](https://reactjs.org/docs/jsx-in-depth.html)
* [API Reference](https://reactjs.org/docs/react-api.html)
* [Where to Get Support](https://reactjs.org/community/support.html)
* [Contributing Guide](https://reactjs.org/docs/how-to-contribute.html)

You can improve it by sending pull requests to [this repository](https://github.com/reactjs/reactjs.org).

## Examples

We have several examples [on the website](https://reactjs.org/). Here is the first one to get you started:
`;

function PostPage() {
  console.log(filterHeaders(mdx));
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
    <Grid.Column style={{ width: '70%' }}>
      <PostPage />
    </Grid.Column>
    <Grid.Column>
      <LargeSideBar />
    </Grid.Column>
  </Grid>
);

export default Resource;
