import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, text, dateCreated }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
    className={`u-margin-bottom-tiny  a-alchemy-handwriting ` + (completed ? 'a-redux-todo__completed' : '')}
  >
    {text}
    {dateCreated}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
};

export default Todo;
