import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id:0, message:'Hi, how are you?', likesCount: 12},
  {id:1, message:'It/s my first post', likesCount: 11}

]
let dialogsData = [
  {id:0, name:'Ann'},
  {id:1, name:'Bob'},
  {id:2, name:'Masha'},
  {id:3, name:'Luna'},
  {id:4, name:'Tik'},
  {id:5, name:'Lusi'}

]
let messages = [
  {id:0, message:'Hi'},
  {id:1, message:'Whats'},
  {id:2, message:'How are you?'},
  {id:3, message:'Ok'}
]


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App posts={posts} dialogsData={dialogsData} messages={messages} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
