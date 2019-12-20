import React from 'react'
import {Input, Form} from 'semantic-ui-react'
import handleChange from './signUpFields'

const SignupInput = (props) => {
    return(
        <Form.Input error={props.error} onChange={props.onChange} type={props.type} name={props.name} value={props.value} label={props.label}
        width={10} style={{marginBottom: 10}}/>
    )
}

export default SignupInput