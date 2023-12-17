import { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import { faRub } from "@fortawesome/free-solid-svg-icons";
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodos = (todo) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false,
      },
    ]);
    // console.log(uuidv4);
    console.log(todo);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
       ) )
    );
  };


  const handleDelete = (id) => {
    setTodos(todos.filter(todos => todos.id !== id))
  }



  return (
    <div className="TodoWrapper">
      <h1>Get stuff done!!</h1>

      <TodoForm addTodo={addTodos} />
      {todos.map((todo, index) => (
        <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTask={handleDelete} />
      ))}
    </div>
  );
};

export default TodoWrapper;