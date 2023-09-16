import React from 'react';
import Task from '../task/task';

import './task-list.css'

const TaskList = ({props}) => {
    const elements = props.map((item) => {
        const { id, important, ...descr } = item
        let element
        if (important === 'editing'){
            element = <input type="text" className="edit" defaultValue="Editing task"></input>
        }
        return (
            <li key={id} className={important}>
                <Task otherItems={[important, descr]}/>
                {element}
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
