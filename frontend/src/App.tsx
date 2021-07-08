import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login}/>
    </BrowserRouter>
  );
}

export default App;
