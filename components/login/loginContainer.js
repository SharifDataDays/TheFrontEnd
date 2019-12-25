import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import LoginSignupContainer from '../loginSignup/container';
import LoginFields from './loginFields';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class LoginContainer extends Component {
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
      case 'unathenticated':
        console.log('here')
        toast.error('کاربری با این مشخصات پیدا نشد', options)
      default:
        break;
    }
  };
  render() {
    return (
      <LoginSignupContainer>
        <Header dividing as="h1">ورود</Header>
        <LoginFields notify={this.notify}/>
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
