import { render, screen } from "@testing-library/react";
import { TodoList } from "../../src/components/TodoList";

describe("Pruebas en <TodoList />", () => {
  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<TodoList />);

    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar las tareas creadas", () => {
    const todos = [
      {
        id: 1,
        description: "Tarea 1",
        done: false,
      },
      {
        id: 2,
        description: "Tarea 2",
        done: false,
      },
    ];

    render(<TodoList todos={todos} />);

    expect(screen.getByText("Tarea 1")).toBeTruthy();
    expect(screen.getByText("Tarea 2")).toBeTruthy();
  });
});
