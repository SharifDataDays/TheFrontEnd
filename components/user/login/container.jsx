import React from 'react';
import { Header } from 'semantic-ui-react';
import { ToastContainer, toast } from 'react-toastify';
import Container from '../container';
import LoginFields from './fields';
import 'react-toastify/dist/ReactToastify.css';

function notify(choice) {
  const options = {
    position: 'bottom-left',
    autoClose: 5000,
    pauseOnVisibilityChange: true,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    newestOnTop: false,
    rtl: true,
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
}

function LoginContainer() {
  return (
    <Container>
      <Header dividing as="h1">
        ورود
      </Header>
      <LoginFields notify={notify} />
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

export default LoginContainer;
