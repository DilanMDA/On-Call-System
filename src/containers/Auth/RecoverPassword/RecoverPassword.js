import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { FormWrapper, StyledForm } from "../../../hoc/layout/elements";
import Heading from "../../../components/UI/Headings/Heading";
import Input from "../../../components/UI/Forms/Inputs/Input";
import Button from "../../../components/UI/Forms/Button/Button";

const RecoverSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email.").required("The email is required"),
});
const initialValues = {
  email: "",
};

const RecoverPassword = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RecoverPassword}
      onSubmit={async (values, { setSubmitting }) => {
        console.log(values);
        console.log("send e-mail recurver");
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <Heading noMargin size="h1" color="white">
            Recover your password
          </Heading>
          <Heading size="h4" bolod color="white">
            Type in your e-mail recover your password
          </Heading>
          <StyledForm>
            <Field
              type="email"
              name="email"
              placeholder="Type your email...."
              component={Input}
            />
            <Button
              disabled={!isValid || isSubmitting}
              //   loading={loading ? "Sending recover email..." : null}
              type="submit"
            >
              Recover email
            </Button>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default RecoverPassword;
