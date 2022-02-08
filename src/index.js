
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import store  from './redux/state';
 

let rerenderEntireTypeTree = (state) =>
{ReactDOM.render(
    <BrowserRouter>
    <App state={state} dispatch={store.dispatch.bind(store)} 
    />
    </BrowserRouter>,
 document.getElementById('root')
);
}
rerenderEntireTypeTree(store.getState());
store.subscribe(rerenderEntireTypeTree);