import { Modal, useMantineTheme } from '@mantine/core';
import React from 'react';
import PostShare from '../PostShare/PostShare';
import './ShareModal.css'

export default function ShareModal({ modalOpened, setModalOpened }) {
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
      size='60%'
      title={<h1>Share your todos with your friends</h1>}
    
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <PostShare/>
    </Modal>
  );
}
