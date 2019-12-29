import React, { Component } from 'react';
import Navbar from '~/components/dashboard/navbar';
// import Milestones from 'components/dashboard/main/milestones.jsx'
import TimeLine from '~/components/dashboard/main/milestones.jsx'
import Timeline from '../../components/dashboard/main/milestones';

export default class dashboard extends Component {
  render() {
    return (
      <>
        <Navbar  />
        <Timeline />
      </>
    );
  }
}
