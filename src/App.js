import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';
import './styles/App.css';
import PostsItem from './components/PostsItem';
import PostList from './components/PostList';
import MyButton from './components/UI/Button/MyButton';
import MyInput from './components/UI/Input/MyInput';
function App() {
const [posts, setPosts] = useState([
  {id:1, title: 'JavaScript', body: 'Description'},
  {id:2, title: 'JavaScript', body: 'Description'}

])

let initialState='jjjj';
const [title, setTitle] = useState(initialState); 
const addNewPost = (e) => {
  e.preventDefault()
console.log(title)
}

  return (
    <div className='App'>
      <form>
        <MyInput 
        value={title}
        onChange={e => setTitle(e.target.value)}
        type="text" 
        placeholder='Название поста' />
        <MyInput type="text" placeholder='Описание поста' />
        <MyButton onClick={addNewPost}> Создать пост</MyButton>
      </form>
     <PostList posts={posts} title="Посты про JS 1"/>

    </div>
  );
} 

export default App;
