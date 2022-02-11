import React from 'react';
import s from './Dialoge.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator } from './../../redux/state';
import { sendMessageCreator } from './../../redux/state';

const Dialoge = (props) =>{
  let state= props.store.getState().messagePage;  

  let dialogeElements = state.dialogsData.map( d => <DialogItem name={d.name} id={d.id} />);
  let messageElements = state.messages.map( m => <Message  message={m.message}/> );

   let newMessageBody = props.newMessageBody;

    let onSendMessageClick = () => {
   props.store.dispatch(sendMessageCreator());


  } 
  let onNewMessageChange = (e) => {
      let body=e.target.value;
      props.store.dispatch(updateNewMessageBodyCreator(body));
}
 
    return (
     <div className={s.dialogs}>
          <div className={s.dialogsItem}>
             { dialogeElements }
          </div>

          <div className={s.message} >
            <div>{ messageElements }</div> 
            <div>
          <div><textarea value={newMessageBody} 
                           onChange={onNewMessageChange}
                           placeholder='Enter your message' /></div>
            <div><button onClick={onSendMessageClick }> Send</button></div> 
            </div>  
  
          </div>
  
          </div> );
}
export default Dialoge;