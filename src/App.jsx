import { useState } from "react";
import { TodoList } from "./TodoList";
import "./style.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodoItem, setnewTodoItem] = useState("");

  function addTodo() {}

  function deleteTodo() {}

  return (
    <>
      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={newTodoItem}
          onChange={(e) => setnewTodoItem(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </>
  );
}
