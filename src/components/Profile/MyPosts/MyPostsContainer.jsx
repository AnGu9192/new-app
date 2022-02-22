import { addPostActionCreator, updateNewPostCreator } from './../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


const mapStateToProps = (state) =>{
  return{
     posts: state.profilePage.posts,
     newPostText: state.profilePage.newPostText

  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    updateNewPostCreator:(text) =>{
    let action = updateNewPostCreator(text);
    dispatch(action); 
   },
  addPost: () =>{
    dispatch(addPostActionCreator());
  }
}
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);


export default MyPostsContainer;