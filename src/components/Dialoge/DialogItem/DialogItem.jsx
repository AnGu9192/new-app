import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialoge.module.css';

const DialogItem = (props) => {
let path="/dialoge/" + props.id;
return (
  <div className={s.dialog + ' ' + s.active}>
       <NavLink to={path}>{props.name}</NavLink>
  </div>
)
}

export default DialogItem;