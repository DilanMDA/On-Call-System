import React from "react";
import { connect } from "react-redux";
import { Formik, Field } from "formik";
import styled from "styled-components";
import * as Yup from "yup";

import { FormWrapper, StyledForm } from "../../../hoc/layout/elements";
import Message from "../../../components/UI/Message/Message";
import Heading from "../../../components/UI/Headings/Heading";
import Input from "../../../components/UI/Forms/Inputs/Input";
import Button from "../../../components/UI/Forms/Button/Button";
import { authIsReady } from "react-redux-firebase";

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const profileSchema = Yup.object().shape({
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
  password: Yup.string().min(8, "The password is too short."),
  // .required("The passoword is required.")
  confirmPassword: Yup.string().when("password", {
    is: (password) => password.length > 0,
    then: Yup.string()
      .required("You need to confirm your password.")
      .oneOf([Yup.ref("password"), null], `Password doesn't match`),
  }),
});

const Profile = ({ firebase }) => {
  if (!firebase.profile.isLoaded) return null;
  return (
    <Formik
      initialValues={{
        firstName: firebase.profile.firstName,
        lastName: firebase.profile.lastName,
        email: firebase.auth.email,
        password: "",
        confirmPassword: "",
      }}
      validationSchema={profileSchema}
      onSubmit={async (values, { setSubmitting }) => {
        console.log(values);
        // edit the profile
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        // console.log({ isSubmitting });
        <FormWrapper>
          <Heading noMargin size="h1" color="white">
            Edit Your Profile
          </Heading>
          <Heading bold size="h4" color="white">
            Here you can edit your profile
          </Heading>
          <StyledForm>
            <Field
              type="text"
              name="firstName"
              placeholder="Your first name..."
              component={Input}
            />
            <Field
              type="text"
              name="lastName"
              placeholder="Your last name..."
              component={Input}
            />
            <Field
              type="email"
              name="email"
              placeholder="Your email..."
              component={Input}
            />
            <Field
              type="password"
              name="password"
              placeholder="Your password..."
              component={Input}
            />
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Re-type your password..."
              component={Input}
            />
            <Button
              disabled={!isValid || isSubmitting}
              // loading={loading ? "Signing up..." : null}
              type="submit"
            >
              Edit
            </Button>
            <MessageWrapper>
              {/* <Message error show={error}>
                {error}
              </Message> */}
            </MessageWrapper>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ firebase }) => ({
  firebase,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps)(Profile);
