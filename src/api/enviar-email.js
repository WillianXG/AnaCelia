fetch('https://formsubmit.co/ajax/contatositeanacelia@gmail.com', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(values),
})
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      setStatusMessage('Email enviado com sucesso!');
    } else {
      setStatusMessage('Ocorreu um erro ao enviar o email. Por favor, tente novamente mais tarde.');
    }
  })
  .catch(error => {
    console.error('Erro ao enviar email:', error);
    setStatusMessage('Ocorreu um erro ao enviar o email. Por favor, tente novamente mais tarde.');
  })
  .finally(() => {
    setIsSubmittingForm(false); // Desativa o indicador de carregamento
    setSubmitting(false);
  });
