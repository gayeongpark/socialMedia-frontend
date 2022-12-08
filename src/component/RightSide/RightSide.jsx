import React from 'react';
import './RightSide.css';
import { GrNotification } from 'react-icons/gr';
import { RiMessengerLine } from 'react-icons/ri';
import TodoCard from '../TodoCard/TodoCard';



export default function RightSide() {
 
  return (
    <div className='RightSide'>
      <div className='navIcons'>
        <GrNotification className='img'/>
        <RiMessengerLine className='img'/>
        <button className='button lg-button'>Logout</button>
      </div>
      <TodoCard/>
     
    </div>
  );
}
