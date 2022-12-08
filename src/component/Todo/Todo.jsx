import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import'./Todo.css'

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li className='todo'>
      <input
      className='checkbox'
        type='checkbox'
        id='checkbox'
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor='checkbox' className='text'>{text}</label>
      <span className='icon'>
      <button onClick={handleDelete} className='button1'>
        <FaTrashAlt />
      </button>
      </span>
    </li>
  );
}
