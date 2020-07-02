import React, {useState} from 'react';
import Menu from '../componentes/Menu'
import Login from '../componentes/Login'
import MessagingPanel from '../componentes/MessagingPanel'
import PersonsList from '../componentes/PersonsList'
import '../css/Menu.css'

const Home = () => {
    const [category, setCategory] = useState()
    const [userName, setUserName] = useState(null)
    const [listPersons, setListPersons] = useState([])
    const getUserName = (name) => {
      setUserName(name)
    }
    const getCategory =(valor)=>{
        setCategory(valor)
    }
    const updateArray = () =>{
      let listPersonas=[];
      listPersonas.push(userName)
      setListPersons(listPersonas)
      
  }
    console.log(listPersons)
  return(
      <div className="home-view">
        <div className="home-view__side-left">
            <Menu getcategory={getCategory}/>
        </div>
        <div className="home-view__side-center">
          {
            !userName?
            <Login getUserName={getUserName} />
            :
            <MessagingPanel userName={userName} category={category}/>
          }
        </div>
        <div className="home-view__side-right">
           <PersonsList listpersons={listPersons}/>
        </div>
      </div>
    );
}
export default Home