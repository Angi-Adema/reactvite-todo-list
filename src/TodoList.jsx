export function TodoList({ id, listItem, completed, deleteTodo, checkedTodo }) {
  return (
    <li className="list-item">
      <label className="list-item-label">
        <input
          type="checkbox"
          checked={completed}
          data-list-item-checkbox
          onChange={(e) => checkedTodo(id, e.target.checked)}
        />
        <span data-list-item-text>{listItem}</span>
      </label>
      <button onClick={() => deleteTodo(id)} data-button-delete>
        Delete
      </button>
    </li>
  );
}
