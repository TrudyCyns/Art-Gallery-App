import React, { useState } from 'react';
import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { TextArea, TextField, UploadField } from './FormComponents';

import {
  loginValidationSchema,
  photoUploadValidationSchema,
  signupValidationSchema,
} from '../validation/ValidationSchemas';

import { loginUser, postPhotoDetails, registerUser } from '../helpers/requests';

function LoginForm(props) {
  const navigate = useNavigate();
  return (
    <div className="p-3">
      <Formik
        initialValues={{
          Email: '',
          Password: '',
        }}
        validationSchema={loginValidationSchema}
        onSubmit={(values) => {
          loginUser({ ...values }, navigate);
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

            <div className="d-flex flex-column align-items-center">
              <Button className="w-50 rounded" type="submit">
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
          firstName: '',
          lastName: '',
          Email: '',
          Password: '',
          ConfirmPassword: '',
        }}
        validationSchema={signupValidationSchema}
        onSubmit={(values) => {
          console.log({ ...values, ConfirmPassword: undefined });
          registerUser({ ...values, ConfirmPassword: undefined });
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
              <Button className="w-50 rounded" type="submit">
                Sign Up
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

function PhotoUploadForm() {

  const photoUrl = useSelector((store) => store.photoStore.photoData);
  const userDetails = useSelector((store) => store.authStore.userData);

  return (
    <div>
      <Formik
        initialValues={{
          Title: '',
          Description: '',
        }}
        validationSchema={photoUploadValidationSchema}
        onSubmit={(values) => {
          postPhotoDetails({
            ...values,
            photoUrl,
            uploadedBy: userDetails.Email ? userDetails.Email : '',
          });
        }}
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

            <div className="d-flex flex-column align-items-center">
              <Button className="w-50 rounded" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export { LoginForm, SignupForm, PhotoUploadForm };
