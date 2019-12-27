import React from 'react';
import { Button } from 'semantic-ui-react';

const SignupButton = (props) => {
  return (
    <Button onClick={props.onClick} color={props.color} style={{ width: '30%', height: 40 }}>
      {props.text}
    </Button>
  );
};

export default SignupButton;
