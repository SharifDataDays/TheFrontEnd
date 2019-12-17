import React from 'react'
import {Input, Form} from 'semantic-ui-react'
import handleChange from './signUpFields'

const SignupInput = (props) => {
    return(
        <Form.Input name={props.name} value={props.value} label={props.label}
        width={10} style={{marginBottom: 10}}/>
    )
}

export default SignupInput