import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { ToastContainer, toast } from 'react-toastify';
import Container from '../container';
import LoginFields from './fields';
import 'react-toastify/dist/ReactToastify.css';

class LoginContainer extends Component {
  notify = (choice) => {
    const options = {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    };
    switch (choice) {
      case 'incompleteFields':
        toast.error('فیلد‌های مشخص شده باید کامل شوند.', options);
        break;
      case 'unathenticated':
        toast.error('کاربری با این مشخصات پیدا نشد.', options);
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <Container>
        <Header dividing as="h1">
          ورود
        </Header>
        <LoginFields notify={this.notify} />
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
      </Container>
    );
  }
}

export default LoginContainer;
