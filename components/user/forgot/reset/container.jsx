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
    case 'passwordsNotSame':
      toast.error('گذرواژه ها یکسان نیستند.', options);
      break;
    case 'tokenNotValid':
      toast.error('لینک معتبر نیست.', options);
      break;
    case 'commonPassword':
      toast.error('گذرواژه‌ی انتخاب‌شده بسیار معمول است.', options);
      break;
    case 'success':
      toast.success('رمز با موفقیت تغییر یافت.', options);
      break;
    default:
      break;
  }
}

function ResetContainer({ uid, token }) {
  return (
    <Container>
      <Header dividing as="h1">
        تغییر رمز عبور
      </Header>
      <Fields uid={uid} token={token} notify={notify} />
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

export default ResetContainer;
