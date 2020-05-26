import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="formulario">
          <form>
            <h4>Faça seu cadastro abaixo:</h4>
            <label> Digite seu nome: </label>
            <input placeholder="Digite seu nome aqui" /> <br></br>
            <label> Digite seu e-mail: </label>
            <input placeholder="Digite seu e-mail aqui" /> <br></br>
            <label> Digite sua senha: </label>
            <input placeholder="Digite sua senha aqui" />
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
