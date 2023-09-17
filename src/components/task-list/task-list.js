import React from 'react';
import Task from '../task/task';

import './task-list.css'

const TaskList = ({dataList, onComplete, onDeleted}) => {
    const elements = dataList.map((item) => {
        const { id, important, description } = item
        return (
            <li key={id} className={important}>
                <Task
                    itemDescription={description}
                    onComplete={() => onComplete(id)}
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