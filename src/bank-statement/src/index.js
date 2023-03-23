import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import ResetPassword from './pages/Login/ResetPassword/ResetPassword'
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> }></Route>
        <Route path="/home" element={ <Home /> }></Route>
        <Route path="/reset" element={ <ResetPassword /> }></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </ChakraProvider>
  
);

reportWebVitals();
