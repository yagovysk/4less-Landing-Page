import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Form.css';

export function Form() {
  const MessageModal = ({ message, onClose }) => (
    <div className="message-modal">
      <p>{message}</p>
      <button onClick={onClose}>Fechar</button>
    </div>
  );

  const [name, setName] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [messageContent, setMessageContent] = useState('');

  function sendEmail(e) {
    e.preventDefault();
    const telRegex = /^[0-9]*$/;
    if (!telRegex.test(tel)) {
      alert('Telefone deve conter apenas números');
      return;
    }
    if (name === '' || email === '' || tel === '' || message === '') {
      setShowMessage(true);
      setMessageContent(
        'Por favor, preencha todos os campos, o de Empresa é opcional.',
      );
      return;
    }

    const templateParams = {
      from_name: name,
      empresa: empresa,
      email: email,
      tel: tel,
      message: message,
    };

    emailjs
      .send(
        'service_l3fyslg',
        'template_xsx9cqn',
        templateParams,
        'SUZU9vVRBJw2egOzD',
      )
      .then(
        (response) => {
          console.log('EMAIL ENVIADO', response.status, response.text);
          setName('');
          setEmpresa('');
          setEmail('');
          setTel('');
          setMessage('');
          setShowMessage(true);
          setMessageContent('Mensagem enviada com sucesso!');
        },
        (err) => {
          console.log('ERRO', err);
          setShowMessage(true);
          setMessageContent(
            'Erro ao enviar mensagem. Por favor, tente novamente.',
          );
        },
      );
  }
  const closeMessage = () => {
    setShowMessage(false);
    setMessageContent('');
  };
  return (
    <div className="container-form">
      <article className="container-article-form">
        <h1>Contato</h1>
        <p>
          Iniciamos cada projeto com uma simples conversa, conhecendo você e
          suas necessidades de negócio. Em seguida, criamos um plano de trabalho
          personalizado para tornar realidade suas necessidades e visão de
          sustentabilidade.
        </p>
      </article>
      <form onSubmit={sendEmail}>
        {showMessage && (
          <MessageModal message={messageContent} onClose={closeMessage} />
        )}
        <div className="container-inputs">
          <div className="input-1">
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              onChange={(e) =>
                setName(e.target.value.replace(/[^a-zA-Z\s]/gi, ''))
              }
              value={name}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-2">
            <input
              type="text"
              name="empresa"
              placeholder="Empresa (opcional)"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
            />
            <input
              type="tel"
              name="telefone"
              placeholder="Telefone"
              value={tel}
              onChange={(e) => setTel(e.target.value.replace(/\D/g, ''))}
            />
          </div>
        </div>
        <textarea
          name="mensagem"
          placeholder="Mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}></textarea>
        <div id="contacts" className="container-form-button">
          <button className="form-button" type="submit">
            Enviar Mensagem
          </button>
        </div>
      </form>
    </div>
  );
}
