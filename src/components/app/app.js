import React from 'react';

import TaskList from '../task-list';
import NewTaskForm from '../new-task-form';
import Footer from '../footer';

import './app.css'

const App = () => {
  const todoData = [
    {label: 'Completed task', important: 'completed', id: 1},
    {label: 'Editing task', important: 'editing', id: 2},
    {label: 'Active task', important: null, id: 3},
  ]
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <TaskList props={todoData}/>
        <Footer />
      </section>
    </section>
  )
}


export default App;
