import React from 'react';
import './Post.css';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import {FaRegCommentDots} from 'react-icons/fa'
import {BiShareAlt} from 'react-icons/bi'

export default function Post({ data }) {
  return (
    <div className='Post'>
      <img src={data.img} alt='postImage' />
      <div className='PostReact'>
        {data.liked? <FcLike/> : <FcLikePlaceholder/>}
        <FaRegCommentDots/>
        <BiShareAlt/>
      </div>
      <span>{data.likes} likes</span>
      <div className='detail'>
        <div><b>{data.name}</b></div>
        <div className='margin'>{data.desc}</div>
      </div>
    </div>
  );
}
