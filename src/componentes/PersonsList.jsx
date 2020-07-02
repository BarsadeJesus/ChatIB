import React, {useState} from 'react';
//import '../css/Menu.css'

const PersonsList = ({listpersons}) => {
    const username=listpersons
    console.log(username)
    return(
      <div>
          <h3>Lista de participantes</h3>
          <div>
              {username.forEach((ele)=> ele.username)}
          </div>
      </div>
    )

}
export default PersonsList
