import React, { useEffect } from "react";
import { Field, reduxForm } from "redux-form";
const Contact = ({ sendEmail, error, handleSubmit }) => {
  const handleButton = () => {
    const email = {
      subject: "titulo",
      from: "test@gmail.com",
      name: "rafa puyol fernandez",
      text: "consulta",
    };
    sendEmail(email);
  };

  const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );

  return (
    <form>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
      />
      {error && <strong>{error}</strong>}
      <button type="button" onClick={handleButton}>
        Submit
      </button>
    </form>
  );
};

export default reduxForm({
  form: "contactForm",
})(Contact);
