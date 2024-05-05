import React, { useState } from 'react';

export default function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMensagemChange = (event) => {
    setMensagem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar a mensagem
    console.log('Mensagem enviada:', { nome, email, mensagem });
    // Limpar o formulário após o envio
    setNome('');
    setEmail('');
    setMensagem('');
  };

  return (
    <div>
      <h2>Entre em Contato</h2>
      <p>Por favor, preencha o formulário abaixo para entrar em contato conosco:</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={handleNomeChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea
            id="mensagem"
            value={mensagem}
            onChange={handleMensagemChange}
          />
        </div>
        <button type="submit">Enviar Mensagem</button>
      </form>
      <div>
        <h3>Informações de Contato:</h3>
        <p>Email: contato@lojadeinstrumentos.com</p>
        <p>Telefone: (11) 1234-5678</p>
        <p>Endereço: Rua dos Músicos, 123 - Cidade da Música</p>
      </div>
    </div>
  );
}
