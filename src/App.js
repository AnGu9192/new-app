import React from 'react';
import {  Route,  Routes } from 'react-router-dom';
import './App.css';
import DialogeContainer from './components/Dialoge/DialogeContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
 
const App = (props) => {

    
  return (

    <div className='app-wrapper'>
    <Header /> 
    <Navbar />
   
    <div className='app-wrapper-content'>
    <Routes >
      <Route exact path="/dialoge" element={< DialogeContainer   />} />
      <Route path="/profile" element={< Profile />} />

    </Routes>

    </div>
    </div> )
}


export default App;
