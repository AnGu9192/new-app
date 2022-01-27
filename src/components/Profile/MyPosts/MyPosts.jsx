import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) =>{
  let posts = [
    {id:0, message:'Hi, how are you?', likesCount: 12},
    {id:1, message:'It/s my first post', likesCount: 11}

  ]
  let postElements = posts.map( p => <Post message ={p.message} likesCount={p.likesCount} />);

    return  <div className='s.postBlock'>
      <h3>My Posts </h3> 
      <div>
        <div>
        <textarea></textarea>
        </div>
        <div>
        <button>Exit</button>
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