import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import styles from './TodoItem.module.scss';

function TodoItem(props) {
  const [editing, setEditing] = useState(false);

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const {
    todo,
    handleChangeProps,
    deleteToDoProps,
    setUpdate,
  } = props;

  const { completed, id, title } = todo;

  const handleEditing = () => {
    setEditing(!editing);
  };

  const handleUpdatedDone = (e) => {
    if (e.key === 'Enter') {
      setEditing(!editing);
    }
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />
        <button
          type="submit"
          onClick={() => deleteToDoProps(id)}
        >
          <FaTrash />
        </button>
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => {
          setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.instanceOf(Object).isRequired,
  handleChangeProps: PropTypes.func,
  deleteToDoProps: PropTypes.func,
  setUpdate: PropTypes.func,
};

TodoItem.defaultProps = {
  handleChangeProps: () => null,
  deleteToDoProps: () => null,
  setUpdate: () => null,
};

export default TodoItem;
