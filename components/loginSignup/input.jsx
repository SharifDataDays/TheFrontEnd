import React from 'react'
import {Input, Form} from 'semantic-ui-react'

const SignupInput = (props) => {
    return(
        <Form.Input error={props.error} onChange={props.onChange} type={props.type} name={props.name} value={props.value} label={props.label}
         style={{marginBottom: 10}} width={props.width?props.width:10}/>
    )
}

export default SignupInput