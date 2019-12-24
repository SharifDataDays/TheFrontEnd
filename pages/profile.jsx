import React from 'react';
import Profile from '~/components/profile/index';
import Navbar from '~/components/global/navbar';

const profileData = {
  name: 'صبا',
  lastName: 'آآآ',
  userName: 'svw',
  email: 'test@test.com',
  birthDay: '20',
  birthMonth: '6',
  birthYear: '2000',
  university: 'شریف',
  education: 'کارشناسی',
  residence: 'ته',
  callingNumber: '09190919091',
  // password: '',
  // confirmPassword: '',
};

const ProfilePage = () => {
  return (
    <>
      <Navbar transparent />
      <Profile profileData={profileData} />
    </>
  );
};

export default ProfilePage;
