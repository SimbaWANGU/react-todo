/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class InputTodo extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Add Todo..." />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default InputTodo;
