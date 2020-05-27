import React, { Component } from 'react';
import CadastroService from "./CadastroService";


export default class FormCadastro extends Component{
    state = {
        nome: "",
        email: "",
        senha: ""
    }

    onSubmmit(){
      CadastroService.getItens();
    }

    render(){

        return (
            <div className="App">
              <header className="App-header">
        
                <div id="formulario">
                  <form>
                    <h4>Faça seu cadastro abaixo:</h4>
                    <label> Digite seu nome: </label>
                    <input name="nome" placeholder="Digite seu nome aqui" /> <br></br>
                    <label> Digite seu e-mail: </label>
                    <input name="email" placeholder="Digite seu e-mail aqui"  /> <br></br>
                    <label> Digite sua senha: </label>
                    <input name="senha" placeholder="Digite sua senha aqui"  /><br></br>
                    <button type="submit" onClick={()=>this.onSubmmit()} >Enviar cadastro.</button>
                  </form>
                </div>
        
              </header>
            </div>
          );
    }

}