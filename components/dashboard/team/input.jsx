import React, { Component } from 'react';
import { Form, Input as I, Divider, Button, Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import { space, layout, color, border, typography } from 'styled-system';

const Container = styled.div`
  ${space}
  ${color}
  ${border}
`;
const Label = styled.label`
  ${space}
  ${layout}
  ${typography}
`;

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit(event) {
    if (this.props.kind === 'changeName') {
      if (this.state.value !== this.props.defaultValue) {
        const fields = {
          contest: this.props.teamData.contest,
          finalize: false,
          name: this.state.value,
        };
        this.props.func(fields, this.props.token);
      }
    } else if (this.props.kind === 'addMember') {
      const fields = {
        contest_id: this.props.teamData.contest,
        participant: this.state.value,
        accept: true
      };
      this.props.func(fields, this.props.token);
    }
  }

  render() {
    const {
      finalized,
      label,
      placeholder,
      defaultValue,
      buttonName,
      func,
      paddingLeft,
    } = this.props;
    const { value } = this.state;

    if (finalized && this.props.kind === 'addMember') {
      return <></>;
    }

    let buttonComp = (
      <Form.Button
        primary
        content={buttonName}
        floated="right"
        size="small"
        disabled={finalized}
        onClick={this.handleSubmit}
      />
    );
    if (finalized) buttonComp = <></>;
    let divv = <></>;
    if (this.props.kind === 'addMember') {
      divv = <Divider />;
    }
    return (
      <>
        {divv}
        <Grid.Row>
          <Container
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            py={[1, 0, 0]}
          >
            <Container>
              <Label primary style={{ fontWeight: 'bold', paddingLeft }}>
                {label}:
              </Label>
              <I
                placeholder={placeholder}
                disabled={finalized}
                transparent={finalized}
                value={value}
                onChange={this.handleChange}
              />
            </Container>
            {buttonComp}
          </Container>
        </Grid.Row>
      </>
    );
  }
}

export default Input;
