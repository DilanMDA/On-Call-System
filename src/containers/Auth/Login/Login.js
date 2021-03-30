import React, { useEffect } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import styled from "styled-components";

import * as actions from "../../../store/actions";
import { FormWrapper, StyledForm } from "../../../hoc/layout/elements";
import LoginInput from "../../../components/UI/Forms/Inputs/Input";
import Button from "../../../components/UI/Forms/Button/Button";
import Heading from "../../../components/UI/Headings/Heading";
import Message from "../../../components/UI/Message/Message";

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const initialValues = {
  email: "",
  password: "",
};

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email.").required("The email is required"),
  password: Yup.string()
    .required("The password is required")
    .min(8, "The password is too short."),
});

const Login = ({ login, loading, error, cleanUp }) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [ cleanUp ] );
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={async (values, { setSubmitting }) => {
        // console.log(values);
        await login(values);
        setSubmitting(false);
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

            <Button
              disabled={!isValid || isSubmitting}
              loading={loading ? "Login in..." : null}
              type="submit"
            >
              Login
            </Button>

            <MessageWrapper>
              <Message error show={error}>
                {error}
              </Message>
            </MessageWrapper>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error,
});

const mapDispatchToProps = {
  login: actions.signIn,
  cleanUp: actions.clean,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
