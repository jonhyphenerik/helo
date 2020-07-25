import React from 'react';

const Post = (props) => 
    (
        <div>
            <img className='avatar-image' src={props.avatarUrl}/>
            <div className='post-wrapper'>
                <h1>{props.post.title}</h1>
                <p>{props.post.content}</p>
            </div> 
        </div>
    )
 
export default Post;

