import React from 'react';
import TaskFilter from '../tasks-filter';

import './footer.css'
import PropTypes from 'prop-types';

const Footer = ({completeCount, onDeleteAllActive, onActiveFilter, setFilter}) => {
    
    return (
        <footer className="footer">
          <span className="todo-count">{completeCount} items left</span>
          <TaskFilter activeFilter={(id) => onActiveFilter(id)} setFilter={setFilter}/>
          <button className="clear-completed" onClick={onDeleteAllActive}>Clear completed</button>
        </footer>
    );
}

Footer.defaultProps = {
  completeCount: 0
}

Footer.propTypes = {
  completeCount: PropTypes.number,
  onDeleteAllActive: PropTypes.func,
  onActiveFilter: PropTypes.func,
  setFilter: PropTypes.func
}

export default Footer;
