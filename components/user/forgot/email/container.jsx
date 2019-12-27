import React from 'react';
import { Header } from 'semantic-ui-react';
import { ToastContainer, toast } from 'react-toastify';
import Container from '../../container';
import Fields from './fields';
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
    case 'invalidEmail':
      toast.error('ایمیل وارد شده صحیح نیست.', options);
      break;
    case 'emailNotExists':
      toast.error('ایمیل وارد‌شده وجود ندارد.', options);
      break;
    case 'success':
      toast.success('ایمیل ارسال شد.', options);
      break;
    default:
      break;
  }
}

function EmailContainer() {
  return (
    <Container>
      <Header dividing as="h1">
        تغییر رمز عبور
      </Header>
      <Fields notify={notify} />
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

export default EmailContainer;
