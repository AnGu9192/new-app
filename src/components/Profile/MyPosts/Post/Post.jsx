import React from 'react';
import s from './Post.module.css';


const Post = (props) =>{
    return  <div className={s.item}>
        <img src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/arcane-lac-2021/ru_RU/fbda2f3d65a5528d65c79de83092130bc17a3fa3/assets/images/social-1200x630.jpg" />
            { props.message } 
           <div>
           <span>like</span>  
           </div>

  </div>
}
export default Post;