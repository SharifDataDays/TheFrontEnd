import React, { Component } from 'react';
import Head from 'next/head';
import withAuth from '~/components/global/withAuth';
import Layout from '~/components/global/layout';
import Container from '~/components/staff';
import HeaderImage from '~/components/blog/headerImage';
import { staffAPI } from '~/redux/api/home';

class Staff extends Component {
  static async getInitialProps(ctx, token) {
    const res = await staffAPI();
    const staffs = res.data;
    return { staffs, token };
  }

  render() {
    const { staffs, token } = this.props;
    return (
      
        <Layout token={token} hasNavbar hasFooter transparent>
          <Container staffs={staffs}/>
        </Layout>
      
    );
  }
}

export default withAuth()(Staff);
