/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import withAuth from '~/components/global/withAuth';
import Layout from '~/components/global/layout';
import Trials from '~/components/dashboard/trials';

class TrialsPage extends Component {
  static async getInitialProps(ctx, token) {
    return { token };
  }

  render() {
    const { token } = this.props;
    return (
      <Layout token={token} hasNavbar hasFooter>
        <Trials />
      </Layout>
    );
  }
}

export default withAuth(true)(TrialsPage);
