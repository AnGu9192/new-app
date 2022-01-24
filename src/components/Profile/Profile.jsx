import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import Post from './MyPosts/Post/Post';
import s from './Profile.module.css';


const Profile = () =>{
    return <div className={s.content}>
    <div>
    <img src='https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg'/>   
     </div>
     <div>
       Av + description
       </div>
       <MyPosts />
   </div>
}
export default Profile;