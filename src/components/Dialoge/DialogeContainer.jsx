import React from 'react';
import s from './Dialoge.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator } from './../../redux/message-reducer';
import { sendMessageCreator } from './../../redux/message-reducer';
import Dialoge from './Dialoge';

const DialogeContainer = (props) =>{
  let state= props.store.getState().messagePage;  

 

    let onSendMessageClick = () => {
   props.store.dispatch(sendMessageCreator());


  } 
  let onNewMessageChange = (body) => {
      props.store.dispatch(updateNewMessageBodyCreator(body));
}
 
    return (
     <Dialoge updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} 
     messagePage={state} /> )
}
export default DialogeContainer;