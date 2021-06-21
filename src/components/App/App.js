import React from 'react'
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css';

import Header from '../Header/Header'
import Showcase from '../Showcase/Showcase'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import AuthContextProvider from '../../Context/AuthContext';
// import Home from '../Home/Home'
import Dashboard from '../Dashboard/Dashboard'
import DataContextProvider from '../../Context/DataContext';

function App() {
  return (
    <AuthContextProvider>
      <DataContextProvider>
        <Router>   
          <Header/>
          <Switch>
            <Route path = "/" exact= {true} component = {Showcase}/>
            <Route path = "/login" exact={true} component = {Login}/>
            <Route path = "/dashboard" exact={true} component = {Dashboard}/>
          </Switch>
         <Footer/>
        </Router>
      </DataContextProvider>
    </AuthContextProvider>
  );
}

export default App;
