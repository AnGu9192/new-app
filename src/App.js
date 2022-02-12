import React from 'react';
import {  Route, Router, Routes, Link } from 'react-router-dom';
import './App.css';
import Dialoge from './components/Dialoge/Dialoge';
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
      <Route exact path="/dialoge" element={< DialogeContainer store={props.store}/>}/>
      <Route path="/profile" element={< Profile store={props.store}/>} />

    </Routes>

    </div>
    </div> )
}


export default App;
