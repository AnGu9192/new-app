import React,  { useState } from 'react';
import PostsItem from './PostsItem';
const PostList = ({posts, title}) => {

    return(

<div>
<h1 style={{textAlign:'center'}}>
    {title}
      </h1>
   {posts.map(post => 
    <PostsItem post={post} />
    )}     

</div>
 
    
    )
}
export default PostList;