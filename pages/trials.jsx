/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import withAuth from '~/components/global/withAuth';
import Layout from '~/components/global/layout';
import Questions from '~/components/dashboard/trials/questions';

class Trials extends Component {
  static async getInitialProps(ctx, token) {
    return { token };
  }

  render() {
    const { token } = this.props;
    return (
      <Layout token={token} hasNavbar hasFooter>
        <Questions />
      </Layout>
    );
  }
}

export default withAuth(true)(Trials);
