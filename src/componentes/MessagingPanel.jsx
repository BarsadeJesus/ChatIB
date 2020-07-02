import React, {Component, Fragment } from 'react'
import MessagingBox from '../componentes/MessagingBox'
import DisplayConversations from '../componentes/DisplayConversations'
import { useState } from 'react'
import { useEffect } from 'react'

const MessagingPanel = ({userName}) => {
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
        //setMessage([...message, data])
    }
        
  }, [])
 
  const getMessage = (mesage) => {
     /*  setMessage([...message, msg]) */
     const data = {username: name, message: mesage}
     setMessage([...message, data])
     console.log(data)
    /*  connection.send(message) */
    connection.send(JSON.stringify(data)) 
  }
  console.log(message)
  return(
      <Fragment>
        
         <DisplayConversations message={message}/>
         <MessagingBox getMessage={getMessage} />
      </Fragment>
  )
}
export default MessagingPanel