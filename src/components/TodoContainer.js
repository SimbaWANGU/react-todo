/* eslint-disable no-param-reassign */
/* eslint-disable arrow-body-style */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

class TodoContainer extends Component {
  state = {
    todos: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const lStorage = JSON.stringify(this.state.todos);
      localStorage.setItem('todos', lStorage);
    }
  }

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  delToDo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  addToDoItem = (title) => {
    const newToDo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newToDo],
    });
  };

  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
  }

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addToDoProps={this.addToDoItem} />
          <TodoList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteToDoProps={this.delToDo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
