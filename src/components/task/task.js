import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'

import './task.css'

class Task extends Component {
  state = {
    min: this.props.timer.min,
    sec: this.props.timer.sec,
    paused: true,
    over: false,
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick = () => {
    const { min, sec, paused, over } = this.state
    if (paused) return
    if (over) clearInterval(this.timerID)
    if (min === 0 && sec === 0) {
      this.setState({ over: !over })
    } else if (sec === 0) {
      this.setState({
        min: min - 1,
        sec: 59,
      })
    } else {
      this.setState({
        min: min,
        sec: sec - 1,
      })
    }
  }

  onPause = (status) => {
    this.setState({ paused: status })
  }

  render() {
    const { onDeleted, onToggleCompleted, itemDescription } = this.props
    const { min, sec } = this.state
    const date = formatDistanceToNow(new Date(), { includeSeconds: true })
    return (
      <div className="view">
        <input className="toggle" type="checkbox" onClick={onToggleCompleted}></input>
        <label>
          <span className="title">{itemDescription}</span>
          <span className="description">
            <button className="icon icon-play" onClick={() => this.onPause(false)}></button>
            <button className="icon icon-pause" onClick={() => this.onPause(true)}></button>
            {min}:{sec}
          </span>
          <span className="description">created {date} ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
    )
  }
}

Task.propTypes = {
  itemDescription: PropTypes.string.isRequired,
}

export default Task
