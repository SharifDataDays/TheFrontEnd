import { Input as RebassInput } from '@rebass/forms';
import css from '@styled-system/css';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 10px;
`;

const TextInput = styled.input`
  background-color: transparent;
  font-size: 14px;
  display: block;
  border: none;
  border-bottom: 1px solid white;
  width: 300px;
  color: white;
  padding: 10px 10px 10px 5px;
  &:focus {
    outline: none;
    border: none;
  }
`;

const Label = styled.label`
  font-family: Arial;
  font-size: 16px;
  color: white;
  pointer-events: none;
  postition: absolute;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  ${TextInput}:focus ~ & {
    top: -25px;
    font-size: 12px;
    color: #95d1fc;
  }
`;

const Bar = styled.span`
  position: absolute;
  display: block;
  width: 300px;
  &:before {
    content: '';
    height: 1px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #95d1fc;
    transition: 0.2s ease all;
    left: 50%;
  }
  &:after {
    content: '';
    height: 1px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #95d1fc;
    transition: 0.2s ease all;
    right: 50%;
  }
  ${TextInput}:focus ~ &:before {
    width: 50%;
  }
  ${TextInput}:focus ~ &:after {
    width: 50%;
  }
`;

const Input = (props) => {
  return (
    <Container>
      <TextInput type={props.type} />
      <Bar />
      <Label>{props.label}</Label>
    </Container>
  );
};
export default Input;
