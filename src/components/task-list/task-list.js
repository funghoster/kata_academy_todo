import React from 'react';
import Task from '../task/task';

import './task-list.css'

import PropTypes from 'prop-types';

const TaskList = ({dataList, onToggleCompleted, onDeleted}) => {
    const elements = dataList.map((item) => {
        let classCompleted = null
        const { id, completed, label } = item
        if (completed) classCompleted = 'completed'
        return (
            <li key={id} className={classCompleted}>
                <Task
                    itemDescription={label}
                    onToggleCompleted={() => onToggleCompleted(id)}
                    onDeleted={() => onDeleted(id)}
                />
                <input type="text" className="edit" defaultValue="Editing task"></input>
            </li>
        )
    })
    return (
        <ul className="todo-list">
          {elements}
        </ul>
    );
}

TaskList.propTypes = {
    dataList: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggleCompleted: PropTypes.func.isRequired,
    onDeleted: PropTypes.func.isRequired
  }

export default TaskList;