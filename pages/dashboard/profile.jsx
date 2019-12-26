import React, { Component } from 'react';
import Profile from '~/components/profile/index';
import Navbar from '~/components/global/navbar';
import { getProfileData } from '../redux/utils/profile';
import { Loader } from 'semantic-ui-react';
import { height, justifyContent } from 'styled-system';

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: {
        nameFa: 'وات',
        nameEn: 'what',
        lastNameFa: 'آها',
        lastNameEn: 'aha',
        userName: 'svw',
        email: 'test@test.com',
        birthDate: '25-12-1990',
        university: 'شریف',
        // education: 'کارشناسی',
        // residence: 'ته',
        // callingNumber: '09190919091',
      },
      loading: true,
    };
  }
  getInitialProps = async (context) => {
    const USER_TOKEN =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTc3MzAwMjg0LCJqdGkiOiI0ZjQ1OTk5YzhlYzE0ZmZkYTFkYjJkMjc4NGE5OWE3OSIsInVzZXJfaWQiOjI2fQ.IvdJhCjdNTcW4QuUYICygwDji6cRnBwcx8aiqfeeEwE';
    const data = await getProfileData(USER_TOKEN);
    console.log('dataaa');
    console.log(data);

    return data;
  };

  componentDidMount() {
    this.getInitialProps().then((data) => {
      this.setState({
        profileData: {
          nameFa: data.firstname_fa,
          nameEn: data.firstname_en,
          lastNameEn: data.lastname_en,
          lastNameFa: data.lastname_fa,
          birthDate: data.birth_date,
          university: data.university,
        },
        loading: false,
      });
    });
  }

  render() {
    let content = (
      <div
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignContent: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Loader active inline="centered" />
      </div>
    );
    if (!this.state.loading) {
      content = <Profile profileData={this.state.profileData} />;
    }
    console.log(this.state.profileData);
    return (
      <>
        <Navbar transparent />
        {content}
      </>
    );
  }
}
