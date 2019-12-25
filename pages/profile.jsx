import React, { Component } from 'react';
import Profile from '~/components/profile/index';
import Navbar from '~/components/global/navbar';
import { getProfileData } from '../redux/utils/profile';

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
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTc3Mjk5NDY1LCJqdGkiOiIwNjcyZjgxYTJlZGM0MmRhOGRiMzcyNjlhMDE2NzRhNSIsInVzZXJfaWQiOjI2fQ.1ovssFOAlxQUMfEVrtfCyyuznPpeCqJRliOh3GYd_Xw';
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
    let content = <div></div>;
    if (!this.state.loading) {
      content = <Profile profileData={this.state.profileData} />;
    }
    console.log(this.state.profileData)
    return (
      <>
        <Navbar transparent />
        {content}
      </>
    );
  }
}
