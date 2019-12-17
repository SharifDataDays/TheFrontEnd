import React from 'react';
import { Menu, Ref, Segment, Sidebar, Grid } from 'semantic-ui-react';
import Contents from './smallResourceContent';
import Post from '~/components/blog/post';

const mdx = `
# You Don't Know JS Yet (book series) - 2nd Edition

This is a series of books diving deep into the core mechanisms of the JavaScript language.

**To read more about the motivations and perspective behind this book series, check out the [Preface](preface.md).**

## Premier Sponsor

This edition of the **YDKJS** book series is exclusively sponsored by [Frontend Masters](https://frontendmasters.com).

Frontend Masters is the gold standard for top-of-the-line expert training material in frontend-oriented software development. With over 150 courses on all things frontend, this should be your first and only stop for quality video training on HTML, CSS, JS, and related technologies.

----

I teach [all my workshops](https://frontendmasters.com/kyle-simpson) exclusively through Frontend Masters. If you like this book content, please check out my video training courses.

I want to extend a warm and deep thanks to Marc Grabanski and the entire Frontend Masters team, not only for their excellent work with the video training platform, but for their unwavering support of me and of the "You Don't Know JS" books!

----

## Titles

I recommend reading the books in this order:

* [Get Started](get-started/README.md)
* [Scope & Closures](scope-closures/README.md)
* [Objects & Classes](objects-classes/README.md)
* [Types & Grammar](types-grammar/README.md)
* [Sync & Async](sync-async/README.md)
* [ES.Next & Beyond](es-next-beyond/README.md)

## Publishing

As always, you'll be able to read these books online here entirely for free.

This edition of the books is being self-published through [GetiPub](https://geti.pub) publishing. The published books will be made available for sale through normal book retail sources.

If you'd like to contribute financially towards the effort (or any of my other OSS efforts) aside from purchasing the published books, please consider these options:

* [Github Sponsorship](https://github.com/users/getify/sponsorship)
* [Patreon](https://www.patreon.com/getify)
* [Paypal](https://www.paypal.me/getify)

## Contributions

Please feel free to contribute to the quality of this content by submitting PRs for improvements to code snippets, explanations, etc. While typo fixes are welcomed, they will likely be caught through normal editing/publishing processes, **so please don't worry about them right now.**

Any contributions you make to this effort **are of course greatly appreciated**.

But **PLEASE** read the [Contributions Guidelines](CONTRIBUTING.md) carefully before submitting a PR.

## License & Copyright

The materials herein are all &copy; 2019-2020 Kyle Simpson.
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
      style={{ display: 'inline' }}
    />
  );
}

class Resource extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { visible } = this.state;
    const change = visible === '' ? 'visible' : '';
    this.setState({ visible: change });
  }

  render() {
    const elem = document.getElementsByClassName('fluid container')[0];
    elem.setAttribute('style', 'margin-right: 0px !important; margin-left: 0px !important');
    const { visible } = this.state;
    const { width } = this.props;
    return (
      <Grid style={{ display: 'inline-block' }}>
        <Sidebar.Pushable as={Segment.Group} raised>
          <Sidebar
            as={Menu}
            animation="overlay"
            vertical
            visible={visible}
            width="thin"
            floated="right"
            style={{
              width,
              maxHeight: '80vh',
              overflowY: 'scroll',
              backgroundColor: '#f3f4f7',
              direction: 'rtl',
            }}
            onClick={this.handleClick}
          >
            <Contents />
          </Sidebar>
          <Ref>
            <Segment
              secondary
              style={{
                backgroundColor: '#f3f4f7',
                height: '50px',
              }}
              onClick={this.handleClick}
            />
          </Ref>
          <Segment>
            <PostPage />
          </Segment>
        </Sidebar.Pushable>
      </Grid>
    );
  }
}

export default Resource;
