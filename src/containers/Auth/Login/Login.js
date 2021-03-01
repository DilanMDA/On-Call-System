import React from "react";
import styled from "styled-components";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { FormWrapper, StyledForm } from "../../../hoc/layout/elements";
import LoginInput from "../../../components/UI/Forms/Inputs/LoginInput";
import Button from "../../../components/UI/Forms/Button/Button";
import Heading from "../../../components/UI/Headings/Heading";
const initialValues = {
  email: "",
  password: "",
};

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email.").required("The email is required"),
  password: Yup.string().required("The password is required"),
});

const Login = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <Heading noMargin size="h1" color="white">
            Login into your account
          </Heading>
          <Heading bold size="h4" color="white">
            Fill in your details to login into your account
          </Heading>
          <StyledForm>
            <Field
              type="email"
              name="email"
              placeholder="Your email...."
              component={LoginInput}
            />

            <Field
              type="password"
              name="password"
              placeholder="Your password...."
              component={LoginInput}
            />

            <Button disabled={!isValid} type="submit">
              Login
            </Button>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default Login;
