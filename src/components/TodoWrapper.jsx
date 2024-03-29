import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditForm from "./EditForm";
import { v4 as uuidv4 } from "uuid";
// import { faRub } from "@fortawesome/free-solid-svg-icons";
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
    // find id of the clicked item and update its 'completed' value to true or false
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    //remove the todo with id === id passed in
    setTodos(todos.filter((todos) => todos.id !== id));
  };

  const handleEdit = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Get stuff done!!</h1>

      <TodoForm addTodo={addTodos} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditForm editTodo={editTask} task={todo} key={index} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTask={handleDelete}
            editTask={handleEdit}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
