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
        fetch('https://formsubmit.co/ajax/contatositeanacelia@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            alert('Email enviado com sucesso!');
          })
          .catch(error => {
            console.error('Erro ao enviar email:', error);
            alert('Ocorreu um erro ao enviar o email. Por favor, tente novamente mais tarde.');
          })
          .finally(() => {
            setSubmitting(false);
          });
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="name" placeholder="Nome" className="field-input" />
          <ErrorMessage name="name" component="div" className="error-message" />
          <Field type="email" name="email" placeholder="Email" className="field-input" />
          <ErrorMessage name="email" component="div" className="error-message" />
          <Field as="textarea" name="message" placeholder="Digite sua Mensagem" className="message-input" />
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
