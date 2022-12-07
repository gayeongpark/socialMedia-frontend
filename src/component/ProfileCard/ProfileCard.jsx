import React from 'react';
import Profile from '../../image/profile.jpg';
import Cover from '../../image/cover.jpg';
import './ProfileCard.css';

export default function ProfileCard() {
  return (
    <div className='ProfileCard'>
      <div className='ProfileImages'>
        <img src={Cover} alt='coverImage' />
        <img src={Profile} alt='profileImage' />
      </div>
      <div className='ProfileName'>
        <span>Timothée Chalamet</span>
        <span>Astronaut</span>
      </div>
      <div className='followStatus'>
        <hr />
        <div>
          <div className='follow'>
            <span>6,000</span>
            <span>Followings</span>
          </div>
          <div className='vl'></div>
            <div className='follow'>
            <span>1</span>
            <span>Followers</span>
          </div>
        </div>
        <hr />
      </div>
      <span className='profile'>
        My Profile
      </span>
    </div>
  );
}
