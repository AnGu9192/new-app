import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import Post from './MyPosts/Post/Post';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import { addPost } from './../../redux/state';


const Profile = (props) =>{
return <div>
      <ProfileInfo />
       <MyPosts posts={props.profilePage.posts}
       newPostText={props.profilePage.newPostText}
       dispatch={props.dispatch}
   />
   </div>
}
export default Profile;