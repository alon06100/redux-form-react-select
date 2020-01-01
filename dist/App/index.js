/* eslint-disable jsx-a11y/label-has-associated-control */

/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Select from '../Select';

const Form = props => {
  const {
    handleSubmit
  } = props;
  return React.createElement("form", {
    onSubmit: handleSubmit(values => console.log(values))
  }, React.createElement("div", null, React.createElement("label", {
    htmlFor: "firstName"
  }, "First Name"), React.createElement(Field, {
    name: "firstName",
    component: "input",
    type: "text"
  })), React.createElement("div", null, React.createElement("label", {
    htmlFor: "lastName"
  }, "Last Name"), React.createElement(Field, {
    name: "lastName",
    component: "input",
    type: "text"
  })), React.createElement("div", null, React.createElement("label", {
    htmlFor: "email"
  }, "Email"), React.createElement(Field, {
    name: "email",
    component: "input",
    type: "email"
  })), React.createElement("div", null, React.createElement("label", {
    htmlFor: "email"
  }, "Email"), React.createElement(Field, {
    options: [{
      value: 'aaaa',
      label: 'alon'
    }],
    component: Select,
    name: "test"
  })), React.createElement("button", {
    type: "submit"
  }, "Submit"));
};

const ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(Form);
export default ContactForm;