import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => (
  <ol className="o-list-ordered u-alchemy-white-bg u-padding u-margin-bottom-large o-surface--sheets">
    <h4 className="u-margin-bottom-tiny a-alchemy-handwriting u-alchemy-secondary1-colour">My Todo List</h4>
    {todos.map((todo, index) => <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />)}
  </ol>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
