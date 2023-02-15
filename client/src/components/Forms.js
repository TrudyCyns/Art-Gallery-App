import React from "react";
import { Formik } from "formik";
import { Form, Button } from "react-bootstrap";

import { TextArea, TextField, UploadField } from "./FormComponents";

function LoginForm(props) {
  return (
    <div className="p-3">
      <Formik
        initialValues={{
          Email: "",
          Password: "",
        }}
        onSubmit={(values) => {
          alert(values);
        }}
      >
        {({ handleSubmit, errors }) => (
          <Form onSubmit={handleSubmit}>
            <TextField
              name="Email"
              label="Email"
              placeholder="example@email.com"
              errors={errors}
              type="email"
            />

            <TextField
              name="Password"
              label="Password"
              placeholder="Password"
              errors={errors}
              type="password"
            />

            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group> */}

            <div className="d-flex flex-column align-items-center">
              <Button href="/dashboard" className="w-50 rounded">
                Login
              </Button>
              <a
                href="#forgot"
                className="text-decoration-none text-oxford-blue fs-small mt-3"
              >
                Forgot your password?
              </a>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

function SignupForm(props) {
  return (
    <div className="p-3">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          Email: "",
          Password: "",
          ConfirmPassword: "",
        }}
        onSubmit={(values) => {
          alert(values);
        }}
      >
        {({ handleSubmit, errors }) => (
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <TextField
                name="firstName"
                label="First Name"
                placeholder="John"
                errors={errors}
                type="text"
                className="col-md-6"
              />
              <TextField
                name="lastName"
                label="Last Name"
                placeholder="Doe"
                errors={errors}
                type="text"
                className="col-md-6"
              />
            </div>

            <TextField
              name="Email"
              label="Email"
              placeholder="example@email.com"
              errors={errors}
              type="email"
            />
            <div className="row">
              <TextField
                name="Password"
                label="Password"
                placeholder="Password"
                errors={errors}
                className="col-md-6"
                type="password"
              />
              <TextField
                name="ConfirmPassword"
                label="Confirm Password"
                placeholder="Confirm Password"
                errors={errors}
                className="col-md-6"
                type="password"
              />
            </div>

            <div className="d-flex flex-column align-items-center">
              <Button href="/login" className="w-50 rounded">
                Sign Up
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

function PhotoUploadForm(props) {
  return (
    <div>
      <Formik
        initialValues={{
          Title: "",
          Description: "",
        }}
        onSubmit={(values) => {}}
      >
        {({ handleSubmit, errors }) => (
          <Form onSubmit={handleSubmit}>
            <UploadField name="Photo" errors={errors} label="Choose a Photo" />

            <TextField
              name="Title"
              label="Title"
              placeholder="The Greenlands"
              errors={errors}
              type="text"
            />

            <TextArea
              name="Description"
              label="Description"
              placeholder="A description of The Greenlands photo"
              errors={errors}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export { LoginForm, SignupForm, PhotoUploadForm };
