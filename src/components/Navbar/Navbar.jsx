import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () =>{
    return (
    <nav className={s.nav}>
    <div className={s.item}>
      <NavLink  to='/profile' className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
    </div>
    <div  className={`${s.item} ${s.active}`}>
      <NavLink to='/dialoge'   className ={ navData => navData.isActive ? s.active : s.item }>Message</NavLink>
    </div>
    <div  className={`${s.item} ${s.active}`}>
      <NavLink to='/users'   className ={ navData => navData.isActive ? s.active : s.item }>Users</NavLink>
    </div>
    <div  className={s.item}>
      <a>News</a>
    </div>
    <div  className={s.item}>
      <a>Music</a>
    </div>
    <div  className={s.item}>
      <a>Settings</a>
   </div>
  
  </nav> 
    )
}
export default Navbar;