import React, { Component } from 'react';
import { Flex } from 'rebass/styled-components';
import Post from '../post-card/mediumCard';
import MyPersianData from '~/public/posts/postPa.json';
import MyEnglishData from '~/public/posts/postEn.json';

function parseJson(data) {
  const posts = data.map((post) => (
    <Post
      justifyContent="start-end"
      title={post.title}
      categorise={post.categorise}
      dir={post.dir}
      contentSummary={post.contentSummary}
    />
  ));
  return posts;
}

class MediumContainer extends Component {
  constructor(props) {
    super(props);
    const { justifyContent } = this.props;
    const language = 'En';
    this.changeLang = this.changeLang.bind(this);
    this.state = { enPosts: [], pePosts: [], posts: [], justifyContent, language };
  }

  componentDidMount() {
    const { language } = this.state;
    const englishPosts = parseJson(MyEnglishData);
    const persionPosts = parseJson(MyPersianData);
    this.setState({ enPosts: englishPosts, pePosts: persionPosts });
    const posts = language === 'En' ? englishPosts : persionPosts;
    this.setState({ posts });
  }

  changeLang() {
    const { language } = this.state;
    const { pePosts } = this.state;
    const { enPosts } = this.state;
    const otherLanguage = language === 'En' ? 'Pe' : 'En';
    const justifyContent = language === 'En' ? 'flex-end' : 'flex-start';
    this.setState({ language: otherLanguage, justifyContent });
    const posts = otherLanguage === 'En' ? enPosts : pePosts;
    this.setState({ posts });
  }

  render() {
    const { posts } = this.state;
    const { justifyContent } = this.state;
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
        onClick={this.changeLang}
      >
        {posts}
      </Flex>
    );
  }
}

export default MediumContainer;
