import React from 'react';
import './Posts.css'
import { PostsData } from '../../Data/PostsData';
import Post from '../Post/Post';

export default function Posts() {
    return (
        <div className='Posts'>
            {PostsData.map((post, id) => {
                return <Post data={post} id={id}/>
            })}
        </div>
    );
}

