import React from 'react';
import PropTypes from 'prop-types';
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

TodoList.propTypes = {
  todos: PropTypes.instanceOf(Array).isRequired,
  handleChangeProps: PropTypes.func,
  deleteToDoProps: PropTypes.func,
  setUpdate: PropTypes.func,
};

TodoList.defaultProps = {
  handleChangeProps: () => null,
  deleteToDoProps: () => null,
  setUpdate: () => null,
};

export default TodoList;
