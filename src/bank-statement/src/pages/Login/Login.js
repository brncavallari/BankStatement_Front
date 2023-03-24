import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import { SaveToken } from '../Service/Token/TokenHandler'
import { useToast } from '@chakra-ui/react'
import * as S from './Styled'
import { Authentication } from '../Service/Login/LoginService'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  function handlerEmail(event){
    setEmail(event.target.value);
  }

  function handlerPassword(event){
    setPassword(event.target.value);
  }

  function handlerSubmit(){
      try {
        Authentication(email,password);

        toast({
          title: `Login efetuado com sucesso.`,
          position: 'top',
          isClosable: true,
          status: 'success',
        });
      }
      catch(error){
        console.log("to no login")

        toast({
          title: `Usuario ou Senha inexistente`,
          position: 'top',
          isClosable: true,
          status: 'error',
        })
      }
  }

  return (
    <S.LoginContainer>
      <S.LoginCard>
        <S.Title>Bank Statement</S.Title>

        <form>
          <S.Input type="text" value={email} placeholder="Email" onChange={handlerEmail}/>
          <S.Input type="password" value={password} placeholder="Password" onChange={handlerPassword} />
          <Link to="/reset" style={ {float:'right'}}> Esqueceu a senha?</Link>
          <S.Button type="button" onClick={handlerSubmit}>Entrar</S.Button>
        </form>

      </S.LoginCard>
    </S.LoginContainer>
  );
};

export default Login;
