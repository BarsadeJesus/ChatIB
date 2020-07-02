import React from 'react'
import {Input, Label, Button} from '../styles'

const Login = ({getUserName}) => {
    const userNam = getUserName
     
    const login = (e) => {
        e.preventDefault();
        getUserName(e.target.username.value)
    }
    return (
      <div id="login">
      <form onSubmit={login}>
         <label for="exampleForm2">Nombre de usuario </label><span />
          <Input 
              class="form-control"
              type="text" 
              id="username"
              placeholder="Escribe tu nombre"
          />
          <br />
          <div className="button-div">
              <Button type="submit" onClick="updateArray" >Iniciar sesión</Button>
          </div>
      </form>
  </div>
       
        
    
    )
    
}
export default Login