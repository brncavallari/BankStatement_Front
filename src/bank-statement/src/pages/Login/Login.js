import './Login.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";

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
  padding: 15px;
  border-radius: 5px;
  border: none;
  color: #fff;
  background-color: #3498db;
  cursor: pointer;
  display:flex 
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorAlert, setShowErrorAlert] = useState(false)

  function handlerEmail(event){
    setEmail(event.target.value);
  }

  function handlerPassword(event){
    setPassword(event.target.value);
  }
 

  function handlerSubmit(event){
      axios.post(`https://localhost:7040/api/v1/login`, { email: email, password: password })
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        
      });
  }
  
  

  return (
    <LoginContainer>
      <LoginCard>
        <Title>Bank Statement</Title>

        <form>
          <Input type="text" value={email} placeholder="Email" onChange={handlerEmail}/>
          <Input type="password" value={password} placeholder="Password" onChange={handlerPassword} />
          <Link to="/reset" style={ {float:'right'}}> Esqueceu a senha?</Link>
          <Button type="button" onClick={handlerSubmit}>Entrar</Button>
        </form>

        
      </LoginCard>
    </LoginContainer>
  );
  };

export default Login;
