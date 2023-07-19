import styled from 'styled-components';
export const FilterWrap = styled.div`
  border: 2px solid yellow;
  border-radius: 40px;
  background: linear-gradient(146deg, #6c6c66, transparent);
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  width: 400px;
  height: 120px;
`;

export const LabelFilter = styled.label`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 20px;
  font-weight: 600;
  font-family: sans-serif;
  color: rgb(217, 232, 64);
`;
export const InputFilter = styled.input`
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
