import React from 'react';
import './TodoHeader.css';

export default function TodoHeader({ filters, filter, onFilterChange }) {
  return (
    <header className='header'>
      <ul className='filters'>
        {filters.map((value, index) => (
          <li key={index}>
            <button className='filter' onClick={() => onFilterChange(value)}>
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
