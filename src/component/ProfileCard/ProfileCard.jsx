import React, { useState } from 'react';
import { MdLocationPin } from 'react-icons/md';
import ProfileModal from '../ProfileModal/ProfileModal';
import Profile from '../../image/profile.jpg';
import Cover from '../../image/cover.jpg';
import './ProfileCard.css';

export default function ProfileCard() {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className='ProfileCard'>
      <div className='ProfileImages'>
        <img src={Cover} alt='coverImage' />
        <img src={Profile} alt='profileImage' />
      </div>
      <div className='ProfileName'>
        <span>Timothée Chalamet</span>
        <span>@Astronaut</span>
        <span>
          <MdLocationPin />
          Chicago, United States
        </span>
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
      <span className='profile' onClick={() => setModalOpened(true)}>
        Edit Profile
        <ProfileModal
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}
        />
      </span>
    </div>
  );
}
