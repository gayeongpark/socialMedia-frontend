import React from 'react';
import PostSide from '../../component/PostSide/PostSide';
import ProfileSide from '../../component/ProfileSize/ProfileSide';
import RightSide from '../../component/RightSide/RightSide';

export default function Home() {
    return (
        <div className='Home'>
            <ProfileSide/>
            <PostSide/>
            <RightSide/>
        </div>
    );
}

