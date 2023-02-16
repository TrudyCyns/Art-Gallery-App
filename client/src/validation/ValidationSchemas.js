import { string, object, ref } from "yup";

const loginValidationSchema = object().shape({
  Email: string()
    .email("Please enter a valid email address")
    .required("Please provide an email address"),
  Password: string()
    .required("Please provide a password"),
});

const signupValidationSchema = object().shape({
  firstName: string()
    .min(2, "First name must be at least 2 characters")
    .required("Please provide a first name"),
  lastName: string()
    .min(2, "Last name must be at least 2 characters")
    .required("Please proveide a last name"),
  Email: string()
    .email("Please enter a valid email address")
    .required("Please provide an email address"),
  Password: string()
    .min(8, "Password mut be 8 or more characters")
    .required("Please provide a password"),
  ConfirmPassword: string()
    .oneOf([ref("Password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

const photoUploadValidationSchema = object().shape({
  Title: string()
    .min(2, "Title must be at least 2 characters")
    .required("Please provide a title"),
});

export {
  loginValidationSchema,
  signupValidationSchema,
  photoUploadValidationSchema,
};
