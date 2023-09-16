import React from 'react';

import './task.css'

const Task = ({otherItems}) => {
    return (
        <div className="view">
              <input className="toggle" type="checkbox"></input>
              <label>
                <span className="description">{otherItems[1].label}</span>
                <span className="created">created 17 seconds ago</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
        </div>
        
    );
}

export default Task;
