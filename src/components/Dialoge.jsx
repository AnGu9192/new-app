import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialoge.module.css';

const DialogItem = (props) => {
let path="/dialoge/" + props.id;
return (
  <div className={s.dialog + ' ' + s.active}>
       <NavLink to={path}>{props.name}</NavLink>
  </div>
)
}
const Message = (props) =>{
  return(
  <div className={s.dialog}>{props.message} </div>
  )
}
const Dialoge = (props) =>{
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
    {id:2, message:'Hor'},
    {id:3, message:'Ok'}
  ]
  let dialogeElements = dialogsData.map( d => <DialogItem name={d.name} id={d.id} />);
  let messageElements = messages.map( m => <Message  message={m.message}/> );
 
    return (
     <div className={s.dialogs}>
          <div className={s.dialogsItem}>
             { dialogeElements }
          </div>

          <div className={s.message} >
             { messageElements }
          </div>
    </div> );
}
export default Dialoge;