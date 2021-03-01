import React from "react";
import styled from "styled-components";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { FormWrapper, StyledForm } from "../../../hoc/layout/elements";
import LoginInput from "../../../components/UI/Forms/Inputs/LoginInput";

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
          <h1>Login here...</h1>
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

            <button type="submit">Login</button>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default Login;
