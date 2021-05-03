import Head from 'next/head';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import withAuth from '~/components/global/withAuth';
import Container from '~/components/user/signup/container';
import { termsAPI } from '~/redux/api';
import { signupClearAction, signupAction } from '~/redux/actions/signup';
import DropdownInput from '~/components/dashboard/profile/dropdownInput.jsx';
import {getUniversities, getFields, getBmp} from '~/components/dashboard/profile/dropdownOptions.jsx'

class SignupPage extends Component {
  static async getInitialProps(ctx) {
    // const res = await termsAPI();
    // const terms = res.data;
    const universities = await getUniversities();
    const BMPs = await getBmp();
    const fields = await getFields();
    const options = {universities, BMPs, fields}

    return { options};
  }

  componentDidMount() {
    const { clear } = this.props;
    clear();
  }

  render() {
    const { signup, request, options} = this.props;
    
    return (
      <>
        <Head>
          <title>ثبت نام - DataDays 2020</title>
        </Head>
        <Container signup={signup} request={request} options={options}/>
      </>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { signup } = state;
  return {
    signup,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    request: (fields) => {
      dispatch(signupAction(fields));
    },
    clear: () => dispatch(signupClearAction()),
  };
}

export default (connect(mapStateToProps, mapDispatchToProps)(SignupPage));
