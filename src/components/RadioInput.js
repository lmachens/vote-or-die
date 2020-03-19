import React from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;
`;

const Checkmark = styled.div`
  border-radius: 50%;
  border: 1px solid #111;
  background: ${props =>
    props.checked ? props.theme.colors.backgroundAction : '#fff'};
  height: 18px;
  width: 18px;
  margin-right: 8px;
`;

const RadioInput = ({ checked, label, ...inputProps }) => {
  return (
    <Label>
      <Input type="radio" checked={checked} {...inputProps} />
      <Checkmark checked={checked} />
      {label}
    </Label>
  );
};

export default RadioInput;
