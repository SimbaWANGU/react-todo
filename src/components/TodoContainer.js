/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

const TodoContainer = () => {
  function getInitialTodos() {
    const lStorage = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(lStorage);
    return loadedTodos;
  }

  const [todos, setTodos] = useState(getInitialTodos());

  useEffect(() => {
    const lStorage = JSON.stringify(todos);
    localStorage.setItem('todos', lStorage);
  }, [todos]);

  const handleChange = (id) => {
    setTodos((prevState) => (prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    })
    ));
  };

  const delToDo = (id) => {
    setTodos(
      [...todos.filter((todo) => todo.id !== id),
      ],
    );
  };

  const addToDoItem = (title) => {
    const newToDo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newToDo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    );
  };

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addToDoProps={addToDoItem} />
        <TodoList
          todos={todos}
          handleChangeProps={handleChange}
          deleteToDoProps={delToDo}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
};

export default TodoContainer;
