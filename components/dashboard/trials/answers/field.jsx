import _ from 'lodash';
import persianJs from 'persianjs';
import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import Content from '~/components/global/mdx';

class FieldAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formCount: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.removeForm = this.removeForm.bind(this);
    this.addForm = this.addForm.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const { id, qtype, count, changeAnswer } = this.props;
    changeAnswer({
      id,
      qtype,
      count,
      number: e.target.name,
      value: e.target.value,
    });
  }

  removeForm(e) {
    e.preventDefault();
    const { id, qtype, count, changeAnswer } = this.props;
    const { formCount } = this.state;
    this.setState({
      formCount: formCount - 1,
    });
    changeAnswer({
      id,
      qtype,
      count,
      number: formCount - 1,
      value: '',
    });
  }

  addForm(e) {
    e.preventDefault();
    const { formCount } = this.state;
    this.setState({
      formCount: formCount + 1,
    });
  }

  render() {
    const { formCount } = this.state;
    const { content, number, count, type, saved } = this.props;
    return (
      <>
        <Content
          content={`سوال ${persianJs(number)
            .englishNumber()
            .toString()}. ${content}`}
        />
        {formCount !== 1 ? (
          <Button primary onClick={this.removeForm}>
            -
          </Button>
        ) : (
          <></>
        )}
        {formCount < count ? (
          <Button primary onClick={this.addForm}>
            +
          </Button>
        ) : (
          <></>
        )}
        <Form style={{ margin: '1rem auto' }}>
          {_.map(_.range(formCount), (i) => {
            return (
              <Form.Group key={i} width={2} dir="rtl">
                <Form.Input
                  name={i}
                  style={{ textAlign: 'left !important', direction: 'ltr !important' }}
                  value={_.get(saved, `n${i}`, '')}
                  type={type}
                  width={8}
                  onChange={this.handleChange}
                />
              </Form.Group>
            );
          })}
        </Form>
      </>
    );
  }
}

export default FieldAnswer;
