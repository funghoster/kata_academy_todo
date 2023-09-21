import React from 'react'

import './task-filter.css'

const statusButton = [
  { id: 'all', label: 'All' },
  { id: 'active', label: 'Active' },
  { id: 'completed', label: 'Completed' },
]

const TaskFilter = ({ activeFilter, setFilter }) => {
  const buttons = statusButton.map(({ id, label }) => {
    const thisFilter = id === setFilter
    const classNames = thisFilter ? 'selected' : null
    return (
      <li key={id}>
        <button className={classNames} onClick={() => activeFilter(id)}>
          {label}
        </button>
      </li>
    )
  })
  return <ul className="filters">{buttons}</ul>
}

export default TaskFilter
