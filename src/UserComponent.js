import React, { Component }  from 'react';

import axios from 'axios';

const BACKEND_URL = 'http://localhost:8081';

export default class UserComponent extends Component{

    state = {
      users: []
    }

    componentDidMount() {
      axios.get(BACKEND_URL + '/users')
          .then(res => {
            const users = res.data;
            this.setState({ users });
        })
        .catch(err => { 
          console.log(err)
        })
    }
    
    render(){

        return (
            <div className="App">
              <header className="App-header">
        
                <div id="formulario">
                  <form>
                    <h4>Faça seu cadastro abaixo:</h4>
                    <label> Digite seu nome: </label>
                    <input name="inputName" placeholder="Digite seu nome aqui" /> <br></br>
                    <label> Digite seu e-mail: </label>
                    <input name="inputEmail" placeholder="Digite seu e-mail aqui"  /> <br></br>
                    <label> Digite sua senha: </label>
                    <input name="inputPass" placeholder="Digite sua senha aqui"  /><br></br>
                    <button type="submit" onClick={()=>this.onSubmmit()} >Enviar cadastro.</button>
                  </form>
                </div>
        
              </header>

              <ul>
                { this.state.users.map(user => <li key={user.name} >{user.name}</li>) }
              </ul>
              
            </div>
            
          );
    }

}