import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to bottom, #2c3e50, #3498db);
`;

const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  max-width: 400px;
`;

const Title = styled.h1`
  color: #3498db;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
  width: 100%;
  background-color: #E0FFFF;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 10px;
  border: none;
  color: #fff;
  background-color: #3498db;
  cursor: pointer;
  margin-left: 10px
`;



const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  function handlerEmail(event){
    setEmail(event.target.value);
  }

  function handlerNewPassword(event){
    setNewPassword(event.target.value);
  }

  function handlerRepeatPassword(event){
    setRepeatPassword(event.target.value);
  }

  function handleSalvar(event){
      alert("")
  }

    return (
      <LoginContainer>
        <LoginCard>
          <Title>Recuperar Senha</Title>

          <form>
            <Input type="text" value={email} placeholder="Email" onChange={handlerEmail}/>
            <Input type="password" value={newPassword} placeholder="Nova Senha" onChange={handlerNewPassword} />
            <Input type="password" value={repeatPassword}  placeholder="Repita a senha" onChange={handlerRepeatPassword}/>
            <Button type="button">Salvar</Button>

            <Link to="/">
              <Button type="button">Cancelar</Button>
            </Link>
          </form>
        </LoginCard>
      </LoginContainer>
    );
};


export default ResetPassword;
