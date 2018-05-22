import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import PropTypes from 'prop-types';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
        className="o-flex o-flex--row u-margin-bottom"

      >
        <input
          ref={node => {
            input = node;
          }}
          className="o-form__input o-flex__item-auto"
          placeholder="Create a todo item..."
        />
      <button type="submit" className="c-btn c-btn--secondary1">Create</button>
      </form>
    </div>
  );
};
AddTodo = connect()(AddTodo);

AddTodo.propTypes = {
  dispatch: PropTypes.object,
};

export default AddTodo;
