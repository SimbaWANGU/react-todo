import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
  const [textInput, setTextInput] = useState({
    title: '',
  });

  const { addToDoProps } = props;

  const onChange = (e) => {
    setTextInput({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textInput.title.trim()) {
      addToDoProps(textInput.title);
      setTextInput({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Add Todo..."
        name="title"
        className="input-text"
        value={textInput.title}
        onChange={onChange}
      />
      <button type="submit" className="submitButton">
        <FaPlusCircle />
      </button>
    </form>
  );
};

InputTodo.propTypes = {
  addToDoProps: PropTypes.func,
};

InputTodo.defaultProps = {
  addToDoProps: () => null,
};

export default InputTodo;
