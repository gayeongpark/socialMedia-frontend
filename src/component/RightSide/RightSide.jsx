import React from 'react';
import './RightSide.css';
import { GrNotification } from 'react-icons/gr';
import { RiMessengerLine } from 'react-icons/ri';
import TodoList from '../TodoList/TodoList';

export default function RightSide() {
  return (
    <div className='RightSide'>
      <div className='navIcons'>
        <GrNotification className='img'/>
        <RiMessengerLine className='img'/>
        <button className='button lg-button'>Logout</button>
      </div>
      <TodoList/>
    </div>
  );
}
