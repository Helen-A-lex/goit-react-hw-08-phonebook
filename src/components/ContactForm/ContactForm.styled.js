import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormWrap = styled(Form)`
  border: 2px solid yellow;
  border-radius: 40px;
  background: linear-gradient(146deg, #6c6c66, transparent);
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
  font-weight: 600;
  font-family: sans-serif;
  color: rgb(217, 232, 64);
`;
export const Input = styled(Field)`
  width: 250px;
  border: 1px solid #dcdbdb;
  padding: 5px;
  font-size: 15px;
  outline: transparent;

  &:focus {
    border: 1px solid rgb(197 216 14);
    box-shadow: rgb(207 226 21) 5px 0px 27px -8px;
  }
`;
export const ButtonAddDeleteContact = styled.button`
  width: 100px;
  height: 35px;
  padding: 5px;
  background-color: white;
  border: 1px solid #dedede;
  font-size: 15px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: rgb(202 222 4);
    box-shadow: 5px 0px 27px -8px rgba(91, 95, 206, 1);
  }
`;
