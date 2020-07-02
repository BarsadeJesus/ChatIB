import React from 'react'

const Login = ({getUserName}) => {
    const userName = getUserName
    
    const login = (e) => {
        e.preventDefault();
        userName(e.target.username.value)
    }
    return (
        <div id="login">
            <form onSubmit={login}>
                <label>Nombre de usuario </label>
                <input 
                    type="text" 
                    id="username"
                    placeholder="Escribe tu nombre"
                />
                <div className="button-div">
                    <button type="submit" >Iniciar sesión</button>
                </div>
            </form>
        </div>
    
    )
}
export default Login