import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator } from './../../../redux/profile-reducer';

import { updateNewPostCreator } from './../../../redux/profile-reducer';

const MyPosts = (props) =>{

  let postElements = props.posts.map( p => <Post message ={p.message} likesCount={p.likesCount} />);

  let newPostElement= React.createRef()
  let addPost = () => {
    
    props.dispatch(addPostActionCreator());

  }
  let onPostChange =() =>{
    let text = newPostElement.current.value;
    let action = updateNewPostCreator(text)
    props.dispatch(action);

  }
    return  <div className={s.postsBlock}>
      <h3>My Posts </h3> 
      <div>
        <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText } />
        </div>
        <div>
        <button onClick= {addPost}>Edit post</button>
        </div>
      </div>
    <div>
      <div className={s.posts}>
           { postElements }
      </div>
  </div>
  </div>
}
export default MyPosts;