import React, { Component } from 'react'

import './new-task-form.css'

class NewTaskForm extends Component {
  state = {
    label: '',
    min: 0,
    sec: 0,
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.createItem(this.state)
    this.setState({
      label: '',
      min: '',
      sec: '',
    })
  }
  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }
  onMinChange = (e) => {
    this.setState({
      min: Number(e.target.value),
    })
  }
  onSecChange = (e) => {
    this.setState({
      sec: Number(e.target.value),
    })
  }
  render() {
    return (
      <form className="new-todo-form" onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          placeholder="Task"
          type="text"
          autoFocus
          value={this.state.label}
          onChange={this.onLabelChange}
          required
        ></input>
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          type="number"
          inputMode="numeric"
          min={0}
          value={this.state.min}
          onChange={this.onMinChange}
        ></input>
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          type="number"
          min={0}
          max={59}
          value={this.state.sec}
          onChange={this.onSecChange}
        ></input>
        <button type={'submit'}></button>
      </form>
    )
  }
}

export default NewTaskForm
