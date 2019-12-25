import React from 'react';
import Profile from '~/components/profile/index';
import Navbar from '~/components/global/navbar';
import { getProfileData } from '../redux/utils/profile';

const profileData = {
  nameFa: 'وات',
  nameEn: 'what',
  lastNameFa: 'آها',
  lastNameEn: 'aha',
  userName: 'svw',
  email: 'test@test.com',
  birthDate: '25-12-1990',
  university: 'شریف',
  education: 'کارشناسی',
  residence: 'ته',
  callingNumber: '09190919091',
};

async function fillProfileData() {
  const USER_TOKEN =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTc3MjcwMjY0LCJqdGkiOiIwMjU4OTY5YTBhZGU0MGU5ODA3ZTQ3M2VjNGU3NWFjNyIsInVzZXJfaWQiOjR9.s8qwn38ReJcVtMPD6GXtmwqHQyk2F_vkyU6e22qJePE';
  const res = await getProfileData(USER_TOKEN);
  console.log(res);
  profileData.nameFa = res.firstname_fa
  profileData.nameEn = res.firstname_en
  profileData.lastNameEn = res.lastname_en
  profileData.lastNameFa  = res.lastname_fa
  profileData.birthDate = res.birth_date
  profileData.university = res.university
}

const ProfilePage = () => {
  fillProfileData();
  return (
    <>
      <Navbar transparent />
      <Profile profileData={profileData} />
    </>
  );
};

export default ProfilePage;
