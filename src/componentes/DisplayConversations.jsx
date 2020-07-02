import React from 'react'

const DisplayConversations = ({message}) => {
  const msg = message
  console.log(msg)

  const displayMessage = () => msg.map(msgItem => <div>{msgItem.username}: {msgItem.message}</div>) 

  
  return(
      <div>
       
        {/*   {<div>{msg.username}: {msg.message}</div>} */}
        {/*  {msg.map((msgItem) => <div>{msgItem.username}: {msgItem.message}</div>)} */}
      {displayMessage}
      </div>
  )
}
export default DisplayConversations