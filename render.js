import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import { addPost } from './redux/state';
 
export let rerenderEntireTypeTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      <App state={state} addPost={addPost}/>
  
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}


