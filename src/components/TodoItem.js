/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styles from './TodoItem.module.scss';

function TodoItem(props) {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const { completed, id, title } = props.todo;

  return (
    <li className={styles.item}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={completed}
        onChange={() => props.handleChangeProps(id)}
      />
      <button
        type="submit"
        onClick={() => props.deleteToDoProps(id)}
      >
        Delete
      </button>
      <span style={completed ? completedStyle : null}>
        {title}
      </span>
    </li>
  );
}

export default TodoItem;
