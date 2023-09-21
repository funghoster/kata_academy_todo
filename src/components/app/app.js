import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

import TaskList from '../task-list'
import NewTaskForm from '../new-task-form'
import Footer from '../footer'

import './app.css'

class App extends Component {
  state = {
    todoData: [this.todoItem('Completed task'), this.todoItem('Editing task'), this.todoItem('Active task')],
    setFilter: 'all',
  }

  todoItem(label) {
    return {
      id: uuidv4(),
      label,
      completed: false,
      editing: false,
    }
  }

  createNewItem = (label) => {
    const newItem = this.todoItem(label)
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem]
      return {
        todoData: newArr,
      }
    })
  }

  completedItem = (id) => {
    this.setState(({ todoData }) => {
      const todoDataCopy = JSON.parse(JSON.stringify(todoData))
      const index = todoDataCopy.findIndex((el) => el.id === id)
      todoDataCopy[index].completed = !todoDataCopy[index].completed

      return {
        todoData: todoDataCopy,
      }
    })
  }

  deletedItem = (id) => {
    this.setState(({ todoData }) => {
      const todoDataCopy = JSON.parse(JSON.stringify(todoData))
      const index = todoDataCopy.findIndex((el) => el.id === id)
      todoDataCopy.splice(index, 1)

      return {
        todoData: todoDataCopy,
      }
    })
  }

  deleteAllActive = () => {
    this.setState(({ todoData }) => {
      const todoDataCopy = JSON.parse(JSON.stringify(todoData))
      const delCopy = todoDataCopy.filter((el) => !el.completed)
      return {
        todoData: delCopy,
      }
    })
  }

  onActiveFilter = (id) => {
    this.setState({ setFilter: id })
  }

  filterItems(filter, data) {
    if (filter === 'all') return data
    else if (filter === 'active') return data.filter((item) => !item.completed)
    else if (filter === 'completed') return data.filter((item) => item.completed)
  }

  render() {
    const itemsLeftCount = this.state.todoData.filter((el) => !el.completed).length
    const visibleItems = this.filterItems(this.state.setFilter, this.state.todoData)
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm createItem={this.createNewItem} />
        </header>
        <section className="main">
          <TaskList dataList={visibleItems} onToggleCompleted={this.completedItem} onDeleted={this.deletedItem} />
          <Footer
            completeCount={itemsLeftCount}
            onDeleteAllActive={this.deleteAllActive}
            onActiveFilter={this.onActiveFilter}
            setFilter={this.state.setFilter}
          />
        </section>
      </section>
    )
  }
}

export default App
