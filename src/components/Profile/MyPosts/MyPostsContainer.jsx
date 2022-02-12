import React from 'react';
import { addPostActionCreator, updateNewPostCreator } from './../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) =>{
let state=props.store.getState()
  let addPost = () => {
    
    props.store.dispatch(addPostActionCreator());

  }
  let onPostChange =(text) =>{
    let action = updateNewPostCreator(text)
    props.store.dispatch(action);

  }
    return  (     
       <MyPosts updateNewPostCreator={onPostChange} addPost={addPost} 
       posts={state.profilePage.posts}
       newPostText={state.profilePage.newPostText}
       />
      )
    
}
export default MyPostsContainer;