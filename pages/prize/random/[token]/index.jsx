import React, { Component } from 'react';
import Form from '~/components/prize';
import '~/.semantic/dist/semantic.rtl.min.css';
import Layout from '~/components/global/layout';
import withAuth from '~/components/global/withAuth';
import NotFound from '~/components/global/notFound';
import _ from 'lodash';

class ChooseRandom extends Component {
  static async getInitialProps({ query }, token) {
    const prizeToken = query.token;
    
    return { token, prizeToken};
  }

  render() {
    const { token , prizeToken} = this.props;
    
    return (
      <Layout token={token} hasNavbar hasFooter transparent>
  
          <Form token={prizeToken}/>
  
      </Layout>
    );
  }
}
export default withAuth()(ChooseRandom);
