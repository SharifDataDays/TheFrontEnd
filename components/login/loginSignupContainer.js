import React, { Component} from 'react'
import LoginBox from './loginBox';
import SingupBox from './signupBox';
import {Box} from 'rebass'

export default class LoginSignUpContainer extends Component {
    render() {
        return (
            <Box>
                {this.props.children}
            </Box>
        ); 
    }
}