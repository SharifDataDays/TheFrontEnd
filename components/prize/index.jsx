/* eslint-disable camelcase */
import _ from 'lodash';
import React, { Component } from 'react';
import { Grid, Form as F, Message, Container as C, GridRow } from 'semantic-ui-react';
import styled from 'styled-components';
import { space, color, border, layout } from 'styled-system';
import { randomPrizeAPI } from '~/redux/api/home';
import { Zoom, Fade } from 'react-reveal';

const Label = styled.label`
  ${space}
  ${layout}
`;
const Container = styled(C)`
  ${space}
  ${color}
  ${border}

`;

const limit = 17;
let numberOptions = _.range(1, limit + 1);

numberOptions = numberOptions.map((val) => {
  return { key: val, value: val, text: val };
});

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      submittedNumber: '',
      error: '',
      success: false,
      waiting: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = async () => {
    const { number } = this.state;

    this.setState({ submittedNumber: number, waiting: true, success: false, error: '' });
    const res = await randomPrizeAPI(this.props.token, { number: number });

    if (!_.isUndefined(res.data.status_code) && res.data.status_code != 200) {
      let error = 'خطا';

      if (
        !_.isUndefined(res.data.detail) &&
        !_.isUndefined(res.data.detail.non_field_errors) &&
        _.endsWith(res.data.detail.non_field_errors[0], 'TeamToken matching query does not exist.')
      )
        error = 'آدرس صفحه معتبر نیست.';
      this.setState({
        error: error,
        success: false,
        waiting: false,
      });
    } else {
      this.setState({
        success: true,
        error: '',
        waiting: false,
      });
    }
  };

  render() {
    return (
      <Container
        px={[1, 4, 4]}
        pt={6}
        pb={5}
        style={{
          backgroundColor: '#191919',
          minHeight: 'calc(100vh - 333px)',
        }}
        fluid
      >
        <Grid centered style={{ padding: 0, margin: 0 }}>
          <Grid.Row>
            <F onSubmit={this.handleSubmit} dir="RTL" inverted>
              <F.Group>
                <Label py={2} style={{ width: '100px' }}>
                  عدد انتخابی:
                </Label>
                <F.Select
                  inverted
                  options={numberOptions}
                  name="number"
                  value={this.state.number}
                  onChange={this.handleChange}
                />

                <F.Button content="ثبت" />
              </F.Group>
            </F>
          </Grid.Row>
          <Grid.Row>
            {this.state.waiting ? (
              <Grid.Row>
                <Label style={{ color: 'white' }}>...لطفا صبر کنید</Label>
              </Grid.Row>
            ) : (
              <></>
            )}
            <Message hidden={!this.state.success} positive dir="rtl">
              عدد مورد نظر با موفقیت ثبت شد.
            </Message>
            <Message
              hidden={_.isUndefined(this.state.error) || _.isEmpty(this.state.error)}
              negative
              dir="rtl"
            >
              {this.state.error}
            </Message>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Form;
