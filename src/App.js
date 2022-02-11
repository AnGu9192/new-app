import React from 'react';
import {  Route, Router, Routes, Link } from 'react-router-dom';
import './App.css';
import Dialoge from './components/Dialoge/Dialoge';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { addPost, updateNewPostText } from './redux/state'
 
const App = (props) => {

    
  return (

    <div className='app-wrapper'>
    <Header /> 
    <Navbar />
   
    <div className='app-wrapper-content'>
    <Routes >
      <Route exact path="/dialoge" element={< Dialoge store={props.store} dialogsData={props.state.messagePage.dialogsData} 
      messages={props.state.messagePage.messages} />} />
      <Route path="/profile" element={< Profile   profilePage={props.state.profilePage}
                                                  dispatch={props.dispatch}/>} />

    </Routes>

    </div>
    </div> )
}


export default App;
