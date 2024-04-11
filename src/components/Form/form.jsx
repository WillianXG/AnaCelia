import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './form.css'; // Importe o arquivo CSS

const MyForm = () => (
  <div className="form-container">
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'O campo está vazio';
        }
        if (!values.email) {
          errors.email = 'Email inválido';
        }
        if (!values.message) {
          errors.message = 'A mensagem não pode estar vazia';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="name" placeholder="Nome" className="field-input" />
          <ErrorMessage name="name" component="div" className="error-message" />
          <Field type="email" name="email" placeholder="Email" className="field-input" />
          <ErrorMessage name="email" component="div" className="error-message" />
          <Field as="textarea" name="message" placeholder="Digite sua Menssagem" className="message-input" /> {/* Adicionando a classe message-input */}
          <ErrorMessage name="message" component="div" className="error-message" />
          <button type="submit" disabled={isSubmitting} className="submit-button">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default MyForm;
