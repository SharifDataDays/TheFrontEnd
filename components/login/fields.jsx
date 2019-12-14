import React from 'react';
import { Button, Form, Grid, Icon } from 'semantic-ui-react';

const FormExampleForm = () => (
  <Grid centered>
    <Grid.Column width={10}>
      <Form>
        <Form.Field>
          <label>Email</label>
          <input />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" />
        </Form.Field>
        <Form.Field>
          <Button color="black">
            <Icon name="github" /> Github
          </Button>
          <Button color="google plus">
            <Icon name="google" /> Gmail
          </Button>
        </Form.Field>
        <Button type="submit">Login</Button>
      </Form>
    </Grid.Column>
  </Grid>
);

export default FormExampleForm;
