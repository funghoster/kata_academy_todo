import React, { Component } from 'react';

import TaskList from '../task-list';
import NewTaskForm from '../new-task-form';
import Footer from '../footer';

import './app.css'

class App extends Component {
  state = {
    todoData: [
      {id: 1, description: 'Completed task', important: null},
      {id: 2, description: 'Editing task', important: null},
      {id: 3, description: 'Active task', important: null},
    ]
  }

  completedItem = (id) => {
    this.setState(({ todoData }) => {
      const todoDataCopy = [...todoData]
      const index = todoDataCopy.findIndex((el) => el.id === id)
      if (todoDataCopy[index].important) todoDataCopy[index].important = null
      else todoDataCopy[index].important = 'completed'
      
      return {
        todoData: todoDataCopy
      }
    })
  }

  deletedItem = (id) => {
    this.setState(({ todoData }) => {
      const todoDataCopy = [...todoData]
      const index = todoDataCopy.findIndex((el) => el.id === id)
      todoDataCopy.splice(index, 1)

      return {
        todoData: todoDataCopy
      }
    })
  }
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList dataList={this.state.todoData} onComplete={this.completedItem} onDeleted={this.deletedItem}/>
          <Footer />
        </section>
      </section>
    );
  }
}

export default App;
