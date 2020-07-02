import React from 'react'
import PersonsList from '../componentes/PersonsList'

const DisplayConversations = ({message}) => {
  const msg = message
  console.log(msg)

  const displayMessage = () => msg.map(msgItem => <div>{msgItem.username}: {msgItem.message}</div>) 

  
  return(
    <div>
      {msg.map((msgItem) => <div>{msgItem.username}: {msgItem.message}</div>)}
    </div>
      
      
  )
}
export default DisplayConversations