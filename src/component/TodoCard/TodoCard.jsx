import React, {useState} from 'react';
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoList from '../TodoList/TodoList';
import './TodoCard.css'

const filters = ['all', 'active', 'completed'];
export default function TodoCard() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <div className='TodoCard'>
      <TodoHeader
        filters={filters}
        filter={filter}
        onFilterChange={(filter) => setFilter(filter)}
      />
      <TodoList filter={filter} />
    </div>
  );
}
