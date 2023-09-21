import React, { Component } from 'react'

import './new-task-form.css'

class NewTaskForm extends Component {
  state = {
    label: '',
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.createItem(this.state.label)
  }
  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={this.onLabelChange}
          value={this.state.label}
        ></input>
      </form>
    )
  }
}

export default NewTaskForm
