import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) =>{

  let postElements = props.posts.map( p => <Post message ={p.message} likesCount={p.likesCount} />);

  let newPostElement= React.createRef();

  let addPost = () => {
    let text= newPostElement.current.value;
    alert(text);
  }
    return  <div className={s.postsBlock}>
      <h3>My Posts </h3> 
      <div>
        <div>
        <textarea ref={newPostElement}></textarea>
        </div>
        <div>
        <button onClick= {addPost}>Exit</button>
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