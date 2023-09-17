import React, { Component } from 'react';

import TaskList from '../task-list';
import NewTaskForm from '../new-task-form';
import Footer from '../footer';

import './app.css'

import { v4 as uuidv4 } from 'uuid';
class App extends Component {
  state = {
    todoData: [
      this.createTodoItem('Completed task'),
      this.createTodoItem('Editing task'),
      this.createTodoItem('Active task')
    ]
  }

  createTodoItem(label) {
    return {
      id: uuidv4(),
      label,
      completed: false,
      editing: false
    }
  }

  completedItem = (id) => {
    this.setState(({ todoData }) => {
      const todoDataCopy = JSON.parse(JSON.stringify(todoData))
      const index = todoDataCopy.findIndex((el) => el.id === id)
      todoDataCopy[index].completed = !todoDataCopy[index].completed
      
      return {
        todoData: todoDataCopy
      }
    })
  }

  deletedItem = (id) => {
    this.setState(({ todoData }) => {
      const todoDataCopy = JSON.parse(JSON.stringify(todoData))
      const index = todoDataCopy.findIndex((el) => el.id === id)
      todoDataCopy.splice(index, 1)

      return {
        todoData: todoDataCopy
      }
    })
  }
  render() {
    const itemsLeftCount = this.state.todoData.filter((el) => !el.completed).length
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList
            dataList={this.state.todoData}
            onToggleCompleted={this.completedItem}
            onDeleted={this.deletedItem}/>
          <Footer completeCount={itemsLeftCount} />
        </section>
      </section>
    );
  }
}

export default App;
