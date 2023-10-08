import React, { useState } from 'react'

import './new-task-form.css'

const NewTaskForm = ({ createItem }) => {
  const [label, setLabel] = useState('')
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')

  const clearForm = () => {
    setLabel('')
    setMin('')
    setSec('')
  }
  return (
    <form
      className="new-todo-form"
      onSubmit={(e) => {
        e.preventDefault()
        createItem({ label, min, sec })
        clearForm()
      }}
    >
      <input
        className="new-todo"
        placeholder="Task"
        type="text"
        autoFocus
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        required
      ></input>
      <input
        className="new-todo-form__timer"
        placeholder="Min"
        type="number"
        inputMode="numeric"
        min={0}
        value={min}
        onChange={(e) => setMin(Number(e.target.value))}
      ></input>
      <input
        className="new-todo-form__timer"
        placeholder="Sec"
        type="number"
        min={0}
        max={59}
        value={sec}
        onChange={(e) => setSec(Number(e.target.value))}
      ></input>
      <button type={'submit'}></button>
    </form>
  )
}

export default NewTaskForm
