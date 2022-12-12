import React, { useState, useRef } from 'react';
import ProfileImage from '../../image/profile.jpg';
import ShareModal from '../ShareModal/ShareModal';
import './PostShare.css';
import {
  HiPhotograph,
  HiVideoCamera,
  HiLocationMarker,
  HiCalendar,
} from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';

export default function PostShare() {
  const [modalOpened, setModalOpened] = useState(false);
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
            className='option'
            onClick={() => imageRef.current.click()}
          >
            <HiPhotograph className='photo'/>
            Photo
          </div>
          <div
            className='option'
            onClick={() => imageRef.current.click()}
          >
            <HiVideoCamera className='video'/>
            Video
          </div>
          <div className='option'>
            <HiLocationMarker className='location'/>
            Location
          </div>
          <div className='option'>
            <HiCalendar className='schedule'/>
            Schedule
          </div>
          <button
            className='button ps-button'
            onClick={() => setModalOpened(true)}
          >
            Share
          </button>
          <ShareModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
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
            <FaTimes onClick={() => setImage(null)} />
            <img src={image.image} alt='previewImage' />
          </div>
        )}
      </div>
    </div>
  );
}
