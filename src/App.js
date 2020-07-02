import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
//import Chat from './componentes/Chat'
import Login from './componentes/Login'
import MessagingPanel from './componentes/MessagingPanel'

function App() {
  const [userName, setUserName] = useState(null)
  const getUserName = (name) => {
    setUserName(name)
  }
  return (
    <div className="App">
      {
        !userName?
        <Login getUserName={getUserName} />
        :
        <MessagingPanel userName={userName}/>
      }
     
    </div>
  );
}

export default App;
