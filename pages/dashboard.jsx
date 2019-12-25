import React, { Component } from 'react';
import { logout } from '~/utils/auth';

class DashboardPage extends Component {
  render() {
    return <p onClick={logout}>logout</p>;
  }
}

export default DashboardPage;
