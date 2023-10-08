import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import TaskList from '../task-list'
import NewTaskForm from '../new-task-form'
import Footer from '../footer'

import './app.css'

const App = () => {
  const [todoData, setTodoData] = useState([])
  const [filter, setFilter] = useState('all')

  const todoItem = (task) => {
    return {
      id: uuidv4(),
      label: task.label,
      completed: false,
      editing: false,
      timer: {
        min: task.min,
        sec: task.sec,
      },
    }
  }

  const createNewItem = (task) => {
    const newItem = todoItem(task)
    setTodoData((data) => {
      return [...data, newItem]
    })
  }

  const completedItem = (id) => {
    setTodoData((data) => {
      const index = data.findIndex((el) => el.id === id)
      data[index].completed = !data[index].completed
      return [...data]
    })
  }

  const deletedItem = (id) => {
    setTodoData((data) => {
      const index = data.findIndex((el) => el.id === id)
      data.splice(index, 1)
      return [...data]
    })
  }

  const deleteAllActive = () => {
    setTodoData((data) => {
      const delCopy = data.filter((el) => !el.completed)
      return [...delCopy]
    })
  }

  const onActiveFilter = (id) => {
    setFilter(id)
  }

  function filterItems(filter, data) {
    switch (filter) {
      case 'all':
        return data

      case 'active':
        return data.filter((item) => !item.completed)

      case 'completed':
        return data.filter((item) => item.completed)
    }
  }
  const itemsLeftCount = todoData.filter((el) => !el.completed).length
  const visibleItems = filterItems(filter, todoData)
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm createItem={createNewItem} />
      </header>
      <section className="main">
        <TaskList dataList={visibleItems} onToggleCompleted={completedItem} onDeleted={deletedItem} />
        <Footer
          completeCount={itemsLeftCount}
          onDeleteAllActive={deleteAllActive}
          onActiveFilter={onActiveFilter}
          setFilter={filter}
        />
      </section>
    </section>
  )
}

export default App
