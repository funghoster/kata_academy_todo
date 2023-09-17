import React, { Component } from 'react';

import './task.css'

class Task extends Component {


  render() {
    const {itemDescription, onComplete, onDeleted} = this.props
    return (
      <div className="view">
              <input className="toggle" type="checkbox" onClick={onComplete}></input>
              <label>
                <span className="description">{itemDescription}</span>
                <span className="created">created 17 seconds ago</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
    );
  }
}

export default Task;
