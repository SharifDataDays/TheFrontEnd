/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { FormAnswer } from '~/components/dashboard/trial/questions';

class Trial extends Component {
  render() {
    return (
      <>
        <FormAnswer description="این یک سوال نمونه است." />
      </>
    );
  }
}

export default Trial;
