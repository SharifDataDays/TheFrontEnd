import React, { Component } from 'react';
import Profile from '~/components/profile/index';
import Navbar from '~/components/global/navbar';
// import { getProfileData } from '../redux/utils/profile';
import { Loader } from 'semantic-ui-react';
import nextCookie from 'next-cookies';
import { profileAPI } from '~/redux/api/profile';

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

  // getInitialProps = async (ctx) => {
  //   // const USER_TOKEN =
  //   //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTc3NTQ1MDU1LCJqdGkiOiJiZDU2MTgyYTRiODY0M2VhYTAxMjliYmRjYTQ3MGQwNyIsInVzZXJfaWQiOjI2fQ.mX-1YtNhTXwy4-S8MSu2tPqTQQaIkM2C6mybaOWMGqk';
  //   // const data = await getProfileData(USER_TOKEN);
  //   // console.log('dataaa');
  //   // console.log(data);

  //   // return data;
  //   const { token } = nextCookie(ctx);
  //   const res = await fetch(profileAPI(), {
  //     headers: {
  //       Authorization: `Bearer ${token ? token.access : token}`,
  //     },
  //   });
  //   const data = await res.json();
  //   console.log(data);

  //   return { data };
  // };


  static async getInitialProps(ctx) {
    const { token } = nextCookie(ctx);
    const res = await fetch(profileAPI(), {
      headers: {
        Authorization: `Bearer ${token ? token.access : token}`,
      },
    });
    const data = await res.json();
    console.log(data);

    return { data };
  }

  // componentDidMount() {
  //   this.getInitialProps().then((data) => {
  //     this.setState({
        
  //       profileData: {
  //         nameFa: data.firstname_fa,
  //         nameEn: data.firstname_en,
  //         lastNameEn: data.lastname_en,
  //         lastNameFa: data.lastname_fa,
  //         birthDate: data.birth_date,
  //         university: data.university,
  //       },
  //       loading: false,
  //     });
  //   });
  // }

  render() {
    const {data} = this.props;
    console.log("dataaddd")
    console.log(data)
    // this.setState({
        
    //   profileData: {
    //     nameFa: data.firstname_fa,
    //     nameEn: data.firstname_en,
    //     lastNameEn: data.lastname_en,
    //     lastNameFa: data.lastname_fa,
    //     birthDate: data.birth_date,
    //     university: data.university,
    //   },
    //   loading: false,
    // });

    console.log(this.state.profileData);
    console.log(this.state.loading);

    return (
      <>
        <Navbar transparent />
        <Profile profileData={data} />;
      </>
    );
  }
}
