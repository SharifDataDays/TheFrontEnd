/* eslint-disable class-methods-use-this */
import Router from 'next/router';
import React from 'react';
import { Header } from 'semantic-ui-react';
import { ToastContainer, toast } from 'react-toastify';
import Container from '../container';
import Fields from './fields';
import 'react-toastify/dist/ReactToastify.css';

function notify(choice) {
  const options = {
    position: 'bottom-left',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    newestOnTop: false,
    rtl: true,
    pauseOnVisibilityChange: true,
  };

  switch (choice) {
    case 'incompleteFields':
      toast.error('فیلد های مشخص شده باید کامل شوند', options);
      break;
    case 'passwordsNotSame':
      toast.error('گذرواژه ها یکسان نیستند', options);
      break;
    case 'invalidEmail':
      toast.error('ایمیل وارد شده صحیح نیست', options);
      break;
    case 'usernameExists':
      toast.error('نام کاربری وارد‌شده وجود دارد.', options);
      break;
    case 'emailExists':
      toast.error('ایمیل وارد‌شده وجود دارد.', options);
      break;
    case 'success':
      toast.success('حساب شما با موفقیت ساخته شد.', options);
      Router.push({
        pathname: '/login',
        query: {
          redirect: 'signup',
        },
      });
      break;
    default:
      break;
  }
}

function SignupContainer({ terms }) {
  return (
    <Container>
      <Header as="h1" dividing>
        ثبت نام
      </Header>
      <Fields terms={terms} notify={notify} />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        pauseOnVisibilityChange
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
        newestOnTop
        rtl
      />
    </Container>
  );
}

export default SignupContainer;
