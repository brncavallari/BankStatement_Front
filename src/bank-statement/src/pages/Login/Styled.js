
import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to bottom, #000, #524b6d, #fff);
`;

export  const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  max-width: 400px;
`;

export const Title = styled.h1`
  color: #3498db;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
  width: 100%;
  background-color: #E0FFFF;
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  color: #fff;
  background-color: #635e8c;
  cursor: pointer;
  display:flex 
`;
