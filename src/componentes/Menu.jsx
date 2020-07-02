import React, {useState} from 'react';
import '../css/Menu.css'
import {Link} from 'react-router-dom'
import Login from '../componentes/Login'

const Menu = ({getUserName, getcategory}) => {
  const category = getcategory
const [stateCategory, setStateCategory]=useState()

  const handleCategory = (event) => {
    const state1 = (event.target.value)
    setStateCategory(state1)
    //getEstados(state).then((datos)=>setData(datos))
  };
  category(stateCategory)
   console.log(stateCategory)
   /*  const getUserName = (name) => {
      setUserName(name)
    } */
  return (
    <div>
      <label>Categorias:</label>
      <select class="form-control form-control-lg form-power1" as="select" size="1" onChange={handleCategory}>
        <option>Seleccione una opción</option>
        <option>Amistad</option>
        <option>Viajes</option>
        <option>Nutricion</option>
        <option>Chistes</option>
      </select>
    </div>
   
      
  

  )
  
}
export default Menu