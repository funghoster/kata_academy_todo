import React from 'react';
import { formatDistanceToNow } from 'date-fns'

import './task.css'

import PropTypes from 'prop-types';

const Task = ({onDeleted, onToggleCompleted, itemDescription}) => {
  const date = formatDistanceToNow(new Date(), {includeSeconds: true})
  return (
    <div className="view">
      <input className="toggle" type="checkbox" onClick={onToggleCompleted}></input>
      <label>
        <span className="description">{itemDescription}</span>
        <span className="created">created {date} ago</span>
      </label>
      <button className="icon icon-edit"></button>
      <button className="icon icon-destroy" onClick={onDeleted}></button>
    </div>
  );
}

Task.propTypes = {
  itemDescription: PropTypes.string.isRequired
}

export default Task;

