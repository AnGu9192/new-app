import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () =>{
  
    return <div>
    <div>
    <img src='https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg'/>   
     </div>
     <div className={s.descriptionBlock}>
       Av + description
       </div>
   </div>
}
export default ProfileInfo;