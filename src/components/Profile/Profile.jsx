import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
/*  import s from './Profile.module.css';
import Post from './MyPosts/Post/Post';*/


const Profile = (props) =>{
return <div>
      <ProfileInfo />
       <MyPostsContainer store={props.store} />
   </div>
}
export default Profile;