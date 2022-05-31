/* eslint-disable react/prop-types */
import React, { useState } from 'react';

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
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputTodo;
