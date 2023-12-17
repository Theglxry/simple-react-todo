// import React from 'react'
import { useState } from "react";

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");

  const hanleSubmit = e => {
    e.preventDefault()

    addTodo(value);

    setValue(" ") //to clear the input after submitting
  }






  return (
    <form className="TodoForm" onSubmit={hanleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="'what is the tas for today?.."
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Task
      </button>
    </form>
  );
};

export default TodoForm;
