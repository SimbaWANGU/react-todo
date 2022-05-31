/* eslint-disable react/prop-types */
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const {
    todos,
    handleChangeProps,
    deleteToDoProps,
    setUpdate,
  } = props;
  // const todoTasks = todos;
  // console.log(todoTasks);
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
