import React from 'react';
import PostsData from '../../Data/PostsData';
import { Link } from 'react-router-dom';
import './LogoSearch.css';
import Logo from '../../image/logo.png';
import { FiSearch } from 'react-icons/fi';

export default function LogoSearch() {
  return (
    <div className='LogoSearch'>
      <Link to='/'>
        <img className='logo' src={Logo} alt='logo' />
      </Link>
      <div className='Search'>
        <input type='text' placeholder='#Explor' />
        <div className='button s-icon'>
          <FiSearch />
        </div>
      </div>
    </div>
  );
}
