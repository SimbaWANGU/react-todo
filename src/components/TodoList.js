/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const {
    todos,
    handleChangeProps,
    deleteToDoProps,
    setUpdate,
  } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteToDoProps={deleteToDoProps}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};

export default TodoList;
