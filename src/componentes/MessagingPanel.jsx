import React, {Component, Fragment } from 'react'
import MessagingBox from '../componentes/MessagingBox'
import DisplayConversations from '../componentes/DisplayConversations'
import ListPersons from '../componentes/PersonsList'
import { useState } from 'react'
import { useEffect } from 'react'
import '../css/Menu.css'
//import PersonsList from '../componentes/PersonsList'

const MessagingPanel = ({userName, category}) => {
  const categoryValue=category
  const name = userName
  const [message, setMessage] = useState([])

  const connection = new WebSocket('ws://localhost:9090/')

  /* componentDidMount() {
      connection.onmessage = (message) => {
          const data= JSON.parse(message.data)
      }
  }  */
  useEffect(()=>{
    connection.onmessage = (msg) => {
        const data= JSON.parse(msg.data)
        console.log(data)
        setMessage([...message, data])
    }
        
  })
 
  const getMessage = (message) => {
     /*  setMessage([...message, msg]) */
     const data = {username: name, message: message}
     //setMessage(...message, data)
     //console.log(data)
    /*  connection.send(message) */
    connection.send(JSON.stringify(data)) 
  }
 
  return(
    <div>
      <div>
      <label>{categoryValue}</label>
      </div>
    
      <br />
      <br /><br /><br /><br /><br /><br />
      <div className="fra-elem">
      <Fragment >
        <DisplayConversations message={message}/>
        <MessagingBox getMessage={getMessage} />
       
     </Fragment>
      </div>
      
    </div>
  )
}
export default MessagingPanel