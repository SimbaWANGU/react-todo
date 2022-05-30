/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

function TodoItem(props) {
  return (
    <li>{props.todo.title}</li>
  );
}

export default TodoItem;
