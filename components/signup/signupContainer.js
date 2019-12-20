import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';
import LoginSignupContainer from '../loginSignup/container';
import SignUpFields from './signUpFields';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class SignupContainer extends Component {
  notify = (choice) => {
    let options = {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
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
      default:
        break;
    }
  };
  render() {
    return (
      <LoginSignupContainer>
        <Header size="huge" dividing>
          ثبت نام
        </Header>
        <SignUpFields notify={this.notify} />
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </LoginSignupContainer>
    );
  }
}
