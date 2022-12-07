import React, { useState } from 'react';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim().length === 0) {
        return;
    }
    onAdd({ id: 'certain', text, status: 'active' });
    setText('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={text}
        placeholder='Add Todo'
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}
