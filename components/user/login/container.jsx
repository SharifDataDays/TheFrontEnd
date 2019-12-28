import React from 'react';
import { connect } from 'react-redux';
import { Header, Dimmer } from 'semantic-ui-react';
import { ClipLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import Container from '../container';
import Form from './form';
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

function LoginContainer({ auth }) {
  return (
    <>
      <Dimmer active={auth.loading}>
        <ClipLoader size={75} color="#fff" loading={auth.loading} />
      </Dimmer>
      <Container>
        <Header dividing as="h1">
          ورود
        </Header>
        <Form notify={notify} />
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
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const { auth } = state;
  return {
    auth,
  };
}

export default connect(mapStateToProps)(LoginContainer);
