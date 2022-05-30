/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

function TodoItem(props) {
  return (
    <li>
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.handleChangeProps(props.todo.id)}
      />
      {props.todo.title}
      <button
        type="submit"
        onClick={() => props.deleteToDoProps(props.todo.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
