import React from 'react';
import { Button } from 'semantic-ui-react';

const SignupButton = (props) => {
  return (
    <Button loading={props.loading} onClick={props.onClick} color={props.color} style={{ width: '40%', height: 40 }}>
      {props.text}
    </Button>
  );
};

export default SignupButton;
