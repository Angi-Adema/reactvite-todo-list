import { useState } from "react";
import { TodoList } from "./TodoList";
import "./style.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setnewTodo] = useState("");

  function addTodo() {
    if (newTodo === "") return;

    setTodos((currTodos) => {
      return [
        ...currTodos,
        { listItem: newTodo, completed: false, id: crypto.randomUUID() },
      ];
    });
    setnewTodo("");
  }

  function checkedTodo(todoId, completed) {
    setTodos((currTodos) => {
      return currTodos.map((todo) => {
        if (todo.id === todoId) return { ...todo, completed };
        return todo;
      });
    });
  }

  function deleteTodo(todoId) {
    setTodos((currTodos) => {
      return currTodos.filter((todo) => todo.id !== todoId);
    });
  }

  return (
    <>
      <ul id="list">
        {todos.map((todo) => {
          return (
            <TodoList
              key={todo.id}
              {...todo}
              deleteTodo={deleteTodo}
              checkedTodo={checkedTodo}
            />
          );
        })}
      </ul>

      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={newTodo}
          onChange={(e) => setnewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </>
  );
}
