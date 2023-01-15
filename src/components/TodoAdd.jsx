import { useForm } from "../hooks/useForm";
import PropTypes from "prop-types";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    if (description.trim().length <= 1) return;
    const newTodo = {
      id: new Date().getTime(),
      description: description.trim(),
      done: false,
    };
    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="form-control"
        type="text"
        placeholder="Que hay que hacer?"
        autoComplete="off"
        name="description"
        value={description}
        onChange={onInputChange}
      />

      <button type="submit" className="btn btn-primary mt-2">
        Agregar Tarea
      </button>
    </form>
  );
};

TodoAdd.protoTypes = {
  onNewTodo: PropTypes.func,
};
