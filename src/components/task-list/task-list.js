import React from 'react';
import Task from '../task/task';

import './task-list.css'

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

export default TaskList;