import React from 'react';
import s from './Dialoge.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialoge = (props) =>{
  let state= props.messagePage;  

  let dialogeElements = state.dialogsData.map( d => <DialogItem name={d.name} key={d.id} id={d.id} />);
  let messageElements = state.messages.map( m => <Message  message={m.message}  key={m.id}/> );

   let newMessageBody = props.newMessageBody;

    let onSendMessageClick = () => {
   props.sendMessage();


  } 
  let onNewMessageChange = (e) => {
     let body= e.target.value;
      props.updateNewMessageBody(body);
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