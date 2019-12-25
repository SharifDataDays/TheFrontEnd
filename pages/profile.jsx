import React from 'react';
import Profile from '~/components/profile/index';
import Navbar from '~/components/global/navbar';

const profileData = {
  nameFa: 'صبا',
  nameEn: 'Saba',
  lastNameFa: 'آآآ',
  lastNameEn: 'aaa',
  userName: 'svw',
  email: 'test@test.com',
  birthDate: '22-6-2000',
  university: 'شریف',
  education: 'کارشناسی',
  residence: 'ته',
  callingNumber: '09190919091',
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
