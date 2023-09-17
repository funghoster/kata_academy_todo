import React from 'react';

import './task.css'

const Task = ({itemDescription, onToggleCompleted, onDeleted}) => {
  return (
    <div className="view">
            <input className="toggle" type="checkbox" onClick={onToggleCompleted}></input>
            <label>
              <span className="description">{itemDescription}</span>
              <span className="created">created 17 seconds ago</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
  );
}

export default Task;
