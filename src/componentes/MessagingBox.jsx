import React from 'react'
//import DisplayConversations from '../componentes/DisplayConversations'

const MessagingBox = ({getMessage}) => {
  const getmsg = getMessage
  const messageHandler = (event) => {
      if (event.keyCode===13) {
          event.preventDefault();
          getmsg(event.target.value)
          event.target.value=""
      }
  }
  return(
      <div>
         <textarea class="form-control" id="exampleFormControlTextarea5" rows="5" onKeyDown={messageHandler}></textarea>
        {/*  <DisplayConversations message={message}/> */}
      </div>
  )
}
export default MessagingBox