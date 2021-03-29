import React from "react";
import { connect } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup";

import { FormWrapper, StyledForm } from "../../../hoc/layout/elements";
import SignUpInput from "../../../components/UI/Forms/Inputs/Input";
import Button from "../../../components/UI/Forms/Button/Button";
import Heading from "../../../components/UI/Headings/Heading";
import Message from "../../../components/UI/Message/Message";

import * as actions from "../../../store/actions";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Your first name is required.")
    .min(3, "Too short.")
    .max(25, "Too long."),
  lastName: Yup.string()
    .required("Your last name is required.")
    .min(3, "Too short.")
    .max(25, "Too long."),
  email: Yup.string()
    .email("Invalid email.")
    .required("The email is required."),
  password: Yup.string()
    .required("The passoword is required.")
    .min(8, "The password is too short."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], `Password doesn't match`)
    .required("You need to confirm your password."),
});

const SignUp = ({ signUp, loading, error }) => {
  console.log(error);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignUpSchema}
      onSubmit={async (values, { setSubmitting }) => {
        console.log(values);
        await signUp(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        // console.log({ isSubmitting });
        <FormWrapper>
          <Heading noMargin size="h1" color="white">
            Sign up for an account
          </Heading>
          <Heading bold size="h4" color="white">
            Fill in your details to register your new account
          </Heading>
          <StyledForm>
            <Field
              type="text"
              name="firstName"
              placeholder="Your first name..."
              component={SignUpInput}
            />
            <Field
              type="text"
              name="lastName"
              placeholder="Your last name..."
              component={SignUpInput}
            />
            <Field
              type="email"
              name="email"
              placeholder="Your email..."
              component={SignUpInput}
            />
            <Field
              type="password"
              name="password"
              placeholder="Your password..."
              component={SignUpInput}
            />
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Re-type your password..."
              component={SignUpInput}
            />
            <Button disabled={!isValid} type="submit">
              Sign up
            </Button>
            <Message error show={error}>
              {error}
            </Message>
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
  signUp: actions.signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
