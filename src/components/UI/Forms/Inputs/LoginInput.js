import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 1rem 2rem;
  margin-bottom: 2rem;
  background-color: var(--color-input);
  border: none;
  border-radius: 2rem;
  font-weight: 700;
  font-size: 1.6rem;

  &::placeholder {
    color: var(--color-black);
    font-weight: 700;
    font-size: 1.6rem;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  &::not(::last-child) {
    margin-bottom: 5.5rem;
  }
`;

const Error = styled.div`
  color: #ac0622;
  font-weight: 700;
  font-size: 1.2rem;
`;

const LoginInput = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <InputWrapper>
      <StyledInput {...field} {...props} />
      <Error>{errors[field.name]} </Error>
    </InputWrapper>
  );
};

export default LoginInput;
