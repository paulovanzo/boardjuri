import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/login" exact component={Login}/>
      <Route path="/cadastro" exact component={Cadastro}/>
    </BrowserRouter>
  );
}

export default App;
