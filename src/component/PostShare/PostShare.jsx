import React, { useState, useRef, useContext } from 'react';

import axios from 'axios';
import { AuthContext } from '../../context/auth.context';
import ProfileImage from '../../image/profile.jpg';

// import ShareModal from '../ShareModal/ShareModal';
import './PostShare.css';
import {
  HiPhotograph,
  HiVideoCamera,
  HiLocationMarker,
  HiCalendar,
} from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';

export default function PostShare(props) {
  // const [modalOpened, setModalOpened] = useState(false);
  const API = 'http://localhost:5005';
  const imageRef = useRef();
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const { user } = useContext(AuthContext);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  // const handleButtonClick = () => {
  //   console.log('button');
  //   setModalOpened(true);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPost = {
      user: user._id,
      description: description.current.value,
    };

    // Add new movie to movies list
    props.setPosts([newPost, ...props.posts]);

    // Reset input fields
    setName('');
    setImage('');
    setDescription('');

    axios
      .post(`${API}/users/${user._id}/post`, {
        userId: user._id,
        image,
        description,
      })
      .then((result) => {
        console.log(result);
      });
  };
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
      <div onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder="What's on your mind?"
          onChange={handleDescriptionChange}
        />
        <div className='PostOptions'>
          <div className='option' onClick={() => imageRef.current.click()}>
            <HiPhotograph className='photo' />
            Photo
          </div>
          <div className='option' onClick={() => imageRef.current.click()}>
            <HiVideoCamera className='video' />
            Video
          </div>
          <div className='option'>
            <HiLocationMarker className='location' />
            Location
          </div>
          <div className='option'>
            <HiCalendar className='schedule' />
            Todo
          </div>
          <button
            className='button ps-button'
            onClick={(event) => handleSubmit(event)}
            htmlType='submit'
          >
            Share
          </button>
          {/* <ShareModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          /> */}
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
