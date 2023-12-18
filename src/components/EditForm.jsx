import { useState } from "react";

const EditForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task); //default edting value should be the current task

  const hanleSubmit = (e) => {
    e.preventDefault();

    editTodo(value, task.id);

    setValue(" "); //to clear the input after submitting
  };

  return (
    <form className="TodoForm" onSubmit={hanleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="update task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        edit task
      </button>
    </form>
  );
};

export default EditForm;
