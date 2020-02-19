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

    // if (!_.isUndefined(this.props.initial))
    //   this.initialValue = _.words(
    //     _.replace(_.trimEnd(_.trimStart(this.props.initial, '['), ']'), "'", ''),
    //   );
  }

  // componentDidMount() {
  //   this.initialChange();
  // }

  // initialChange() {
  //   const { id, qtype, changeAnswer } = this.props;
  //   const { formCount } = this.state;
  //   const initialValue = this.initialValue;
  //   console.log(initialValue);
  //   if (!_.isEmpty(initialValue) && !_.isUndefined(initialValue) && !_.isNull(initialValue)) {
  //     this.setState({
  //       formCount: initialValue.length,
  //     });
  //     _.map(_.range(formCount), (i) => {
  //       changeAnswer({
  //         id,
  //         qtype,
  //         formCount,
  //         number: i,
  //         value: initialValue[i],
  //       });
  //     });
  //   }
  // }

  handleChange(e) {
    e.preventDefault();
    const { id, qtype, changeAnswer } = this.props;
    const { formCount } = this.state;
    changeAnswer({
      id,
      qtype,
      count: formCount,
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
      count: this.state.formCount,
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
    const { content, number, count, type, saved, error } = this.props;
    // console.log('FIELD');
    // console.log(this.props);
    // console.log(initialValue);
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
            // const initialValue = this.initialValue
            // console.log(initialValue[i]);
            let val = _.get(saved, `n${i}`, '');
            // if (val === '') val = initialValue[i];
            return (
              <Form.Group
                key={i}
                width={2}
                dir="rtl"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Form.Input
                  name={i}
                  style={{ textAlign: 'left !important', direction: 'ltr !important' }}
                  value={val}
                  type={type}
                  // width={8}
                  error={error}
                  onChange={this.handleChange}
                  // defaultValue={initialValue[i]}
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
