import React from 'react'
import { BrowserRouter,  Switch, Route } from 'react-router-dom';
import Home from './views/Home'
//import Login from './componentes/Login'
//import './css/Router.css'


const Router = () => {
  return(
   <BrowserRouter>
   <Switch>
       <div className="browrou-home">
            <Route exact path="/" component={Home} />
            <Route exact path="Home" component={Home} />
           {/*  <Route exact path="Login" component={Login} /> */}
        </div>   
    </Switch>
   </BrowserRouter>
  )
}
export default Router