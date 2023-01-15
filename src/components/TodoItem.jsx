import { DeleteBtn } from "./DeleteBtn";

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center p-0}">
      <span
        className={`align-self-center flex-grow-1 pt-2 pb-2 ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
        style={{ cursor: "pointer" }}
        onClick={() => onToggleTodo(todo.id)}
        aria-label="span"
      >
        {todo.description}
      </span>

      <DeleteBtn onClick={() => onDeleteTodo(todo.id)} />
    </li>
  );
};
