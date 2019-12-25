import React, { Component } from 'react';
import withNotLogged from '~/components/global/auth/withNotLogged';
import { logout } from '~/utils/auth';

class DashboardPage extends Component {
  render() {
    return <p onClick={logout}>logout</p>;
  }
}

export default withNotLogged(DashboardPage);
