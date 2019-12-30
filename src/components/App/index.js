/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Select from '../Select';

const Form = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit(values => console.log(values))}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field options={[{ value: 'aaaa', label: 'alon' }]} component={Select} name="test" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact',
})(Form);

export default ContactForm;
