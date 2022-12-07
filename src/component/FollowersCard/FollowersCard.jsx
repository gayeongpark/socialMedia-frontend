import React from 'react';
import './FollowersCard.css';
import { Followers } from '../../Data/FollowersData';

export default function FollowersCard() {
  return (
    <div className='FollowersCard'>
      <h2>Following you</h2>

      {Followers.map((follower, id) => {
        return (
          <div className='followers'>
            <div>
              <img
                className='followerImage'
                src={follower.img}
                alt='followerImage'
              />
              <div className='name'>
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className='button fc-button'>Follow</button>
          </div>
        );
      })}
    </div>
  );
}
