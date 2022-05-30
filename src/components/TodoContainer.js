/* eslint-disable react/jsx-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import TodoList from './TodoList';

class TodoContainer extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: 2,
        title: 'Develop website and content',
        completed: false,
      },
      {
        id: 3,
        title: 'Deploy to live server',
        completed: true,
      },
    ],
  };

  render() {
    return (
      <TodoList todos={this.state.todos} />
    );
  }
}

export default TodoContainer;
