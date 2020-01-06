/* eslint-disable camelcase */
import _ from 'lodash';
import React, { Component } from 'react';
import { Grid, Form as F, Message, Button } from 'semantic-ui-react';
import Input from './input';
import { fields } from './utils';

class Form extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const { update, token } = this.props;
    const new_fields = {
      //   username: this.username.state.value,
      //   email: this.email.state.value,
      password_1: this.password_1.state.value,
      password_2: this.password_2.state.value,
      profile: {
        firstname_fa: this.firstname_fa.state.value,
        firstname_en: this.firstname_en.state.value,
        lastname_fa: this.lastname_fa.state.value,
        lastname_en: this.lastname_en.state.value,
        university: this.university.state.value,
        birth_date: _.join(_.reverse(_.split(this.birth_date.state.value, '-')), '-'),
      },
    };
    console.log(new_fields)
    update(new_fields, token);
  }

  render() {
    const { success, errors } = this.props.profile;
    const profileData = {...this.props.profileData, ...this.props.profileData.profile};
    return (
      <Grid>
        <Grid.Column verticalAlign="middle">
          <F onSubmit={this.onSubmit} dir="RTL">
            {_.map(fields, (field) => {
              return(
              <Input
                ref={(c) => {
                  this[field.en] = c;
                }}
                field={field}
                error={errors[field.en]}
                initial={profileData[field.en]}
              ></Input>)
            })}
            <Message hidden={!success} positive>
              تغییرات با موفقیت ذخیره شد.
            </Message>
            <F.Button primary content="ذخیره‌ی تغییرات" floated="right" size="large" />
          </F>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Form;
