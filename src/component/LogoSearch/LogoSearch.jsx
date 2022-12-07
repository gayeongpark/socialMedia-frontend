import React from 'react';
import './LogoSearch.css';
import Logo from '../../image/logo.png'
import {FiSearch} from 'react-icons/fi';

export default function LogoSearch() {
    return (
        <div className='LogoSearch'>
            <img className='logo' src={Logo} alt='logo'/>
            <div className='Search'>
                <input type='text'placeholder='#Explor'/>
            <div className='s-icon'>
               <FiSearch/>
            </div>
            </div>
        </div>
    );
}

