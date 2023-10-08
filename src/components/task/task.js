import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'
import './task.css'

const Task = ({ onDeleted, onToggleCompleted, itemDescription, timer }) => {
  const [time, setTime] = useState({ min: timer.min, sec: timer.sec })
  const [paused, setPaused] = useState(true)
  const [over, setOver] = useState(false)

  useEffect(() => {
    const timerID = setInterval(() => {
      if (paused || over) return
      if (time.min === 0 && time.sec === 0) setOver(true)
      else if (time.sec === 0) {
        setTime((times) => {
          return {
            min: times.min - 1,
            sec: 59,
          }
        })
      } else {
        setTime((times) => {
          return {
            min: times.min,
            sec: times.sec - 1,
          }
        })
      }
    }, 1000)
    return () => clearInterval(timerID)
  }, [paused, over, time])

  const onPause = (status) => {
    setPaused(status)
  }
  const date = formatDistanceToNow(new Date(), { includeSeconds: true })
  return (
    <div className="view">
      <input className="toggle" type="checkbox" onClick={onToggleCompleted}></input>
      <label>
        <span className="title">{itemDescription}</span>
        <span className="description">
          <button className="icon icon-play" onClick={() => onPause(false)}></button>
          <button className="icon icon-pause" onClick={() => onPause(true)}></button>
          {time.min}:{time.sec}
        </span>
        <span className="description">created {date} ago</span>
      </label>
      <button className="icon icon-edit"></button>
      <button className="icon icon-destroy" onClick={onDeleted}></button>
    </div>
  )
}

Task.propTypes = {
  itemDescription: PropTypes.string.isRequired,
}

export default Task
