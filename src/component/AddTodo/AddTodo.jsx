import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './AddTodo.css';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: uuidv4(), text, status: 'active' });
    setText('');
  };
  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='Add'>
      <input
      className='input'
        type='text'
        value={text}
        placeholder='Add Todo'
        onChange={handleChange}
      />
      <button className='button'>Add</button>
      </div>
    </form>
  );
}
