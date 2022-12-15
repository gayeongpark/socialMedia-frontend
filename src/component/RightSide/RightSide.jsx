import React from 'react';
import { Link } from 'react-router-dom';
import './RightSide.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';
import { GrNotification } from 'react-icons/gr';
import { RiMessengerLine } from 'react-icons/ri';
import TodoCard from '../TodoCard/TodoCard';

export default function RightSide() {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);
  return (
    <div className='RightSide'>
      <div className='navIcons'>
        <GrNotification className='img' />
        <RiMessengerLine className='img' />
        {isLoggedIn && (
          <>
            <button className='button lg-button' onClick={logOutUser}>
              Logout
            </button>
          </>
        )}
        {!isLoggedIn && (
          <>
            <Link to='/signup' style={{ textDecoration: 'none' }}>
              <button className='button lg-button'>Sign Up</button>
            </Link>
            <Link to='/login' style={{ textDecoration: 'none' }}>
              <button className='button lg-button'>Login</button>
            </Link>
          </>
        )}
      </div>
      <TodoCard />
    </div>
  );
}
