import { Modal, useMantineTheme } from '@mantine/core';
import './ProfileModal.css';
import React from 'react';

export default function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size='45%'
      opened={modalOpened}
      title={<h1>Edit your info</h1>}
      onClose={() => setModalOpened(false)}
    >
      <form className='infoForm'>
        <div>
          <div>
            <input
              type='text'
              className='infoInput'
              name='FirstName'
              placeholder='First Name'
            />
            <input
              type='text'
              className='infoInput'
              name='LasttName'
              placeholder='Last Name'
            />
          </div>
          <div>
            <input
              type='text'
              className='infoInput'
              name='userName'
              placeholder='Username'
            />
          </div>
          <div>
            <input
              type='text'
              className='infoInput'
              name='location'
              placeholder='City'
            />
            <input
              type='text'
              className='infoInput'
              name='location'
              placeholder='Country'
            />
          </div>
        </div>
        <div className='upload-section'>
          <div className='upload-section-items'>
            Profile Image
            <input type='file' name='profileImg' />
          </div>
          <div className='upload-section-items'>
            Cover Image
            <input type='file' name='coverImg' />
          </div>
        </div>
        <button className='button infoButton'>Update</button>
      </form>
    </Modal>
  );
}
