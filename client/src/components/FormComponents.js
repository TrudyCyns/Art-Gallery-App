import { Field } from "formik";
import Attachment from "./Attachment";

const TextArea = (props) => {
  const { name, label, errors, placeholder, type, className } = props;

  return (
    <>
      <div className={`mb-3 ${className}`}>
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <Field
          as="textarea"
          type={type}
          className="form-control"
          name={name}
          placeholder={placeholder}
          rows="3"
        />
        {errors[name] && (
          <div className="text-danger p-1" id="feedback">
            {errors[name]}
          </div>
        )}
      </div>
    </>
  );
};

const TextField = (props) => {
  const { name, label, errors, placeholder, type, className, disabled } = props;

  return (
    <>
      <div className={`mb-3 ${className}`}>
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <Field
          type={type}
          className="form-control"
          name={name}
          placeholder={placeholder}
          disabled={disabled}
        />
        {errors[name] && (
          <div className="text-danger p-1" id="feedback">
            {errors[name]}
          </div>
        )}
      </div>
    </>
  );
};

const UploadField = (props) => {
  const { name, label, errors, className } = props;

  return (
    <>
      <div className={`mb-3 ${className}`}>
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <Attachment name={name} />
        {errors[name] && (
          <div className="text-danger p-1" id="feedback">
            {errors[name]}
          </div>
        )}
      </div>
    </>
  );
};

export { TextField, TextArea, UploadField };
