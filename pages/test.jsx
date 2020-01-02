import _ from 'lodash';
import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import Head from 'next/head';
import { Grid } from 'semantic-ui-react';
import Navbar from '~/components/global/navbar';
import Footer from '~/components/global/footer';
import Comments from '~/components/blog/post/comments';

const PostPage = (props) => {
  return (
    <>
      <Head>
        <title>`بلاگ DataDays`</title>
      </Head>
      <Navbar />
      <Grid centered>
        <Grid.Column computer={8} tablet={10} mobile={16}>
          <Comments />
        </Grid.Column>
      </Grid>
      <Footer />
    </>
  );
};

export default PostPage;
