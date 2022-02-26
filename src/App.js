import React from 'react';
import * as axios from 'axios'

import {  Route,  Routes } from 'react-router-dom';
import './App.css';
import DialogeContainer from './components/Dialoge/DialogeContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import PersonList from './components/PersonList';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';
 
const App = (props) => {

    
  return (

    <div className='app-wrapper'>
    <Header /> 
    <Navbar />
   
    <div className='app-wrapper-content'>
    <Routes >
      <Route exact path="/dialoge" element={< DialogeContainer   />} />
      <Route path="/profile" element={< Profile />} />
      <Route path="/users" element={ <UsersContainer />} />
      <Route path="/person" element={<PersonList />} />


    </Routes>

    </div>
    </div> )}


export default App;
