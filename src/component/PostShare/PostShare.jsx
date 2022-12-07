import React, { useState, useRef } from 'react';
import ProfileImage from '../../image/profile.jpg';
import './PostShare.css';
import {
  HiPhotograph,
  HiVideoCamera,
  HiLocationMarker,
  HiCalendar,
} from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';

export default function PostShare() {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className='PostShare'>
      <img src={ProfileImage} alt='profileImage' />
      <div>
        <input type='text' placeholder="What's on your mind?" />
        <div className='PostOptions'>
          <div
            className='option photo'
            onClick={() => imageRef.current.click()}
          >
            <HiPhotograph />
            Photo
          </div>
          <div className='option video'>
            <HiVideoCamera />
            Video
          </div>
          <div className='option location'>
            <HiLocationMarker />
            Location
          </div>
          <div className='option schedule'>
            <HiCalendar />
            Schedule
          </div>
          <button className='button ps-button'>Share</button>
          <div>
            <input
              className='upload'
              type='file'
              name='myImage'
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className='previewImage'>
            <FaTimes onClick={() => setImage(null)}/>
            <img src={image.image} alt='previewImage' />
          </div>
        )}
      </div>
    </div>
  );
}
