import { fireEvent, render, screen } from "@testing-library/react";
import { TodoAdd } from "../../src/components/TodoAdd";

describe("Pruebas en <TodoAdd />", () => {
  const onNewTodoMock = jest.fn();
  beforeEach(() => jest.clearAllMocks());

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<TodoAdd />);

    expect(container).toMatchSnapshot();
  });

  test("Se renderiza correctamente un formulario con un input y un botón.", () => {
    render(<TodoAdd />);

    const inputText = screen.getByRole("textbox");
    const submitBtn = screen.getByRole("button");

    expect(inputText).toBeTruthy();
    expect(submitBtn).toBeTruthy();
  });

  test("Debe de llamar el onNewTodo con el objeto de la tarea y luego debe limpiar el textbox", () => {
    render(<TodoAdd onNewTodo={onNewTodoMock} />);
    const inputText = screen.getByRole("textbox");
    const submitBtn = screen.getByRole("button");

    fireEvent.input(inputText, { target: { value: "Nueva Tarea" } });
    fireEvent.click(submitBtn);

    expect(onNewTodoMock).toHaveBeenCalledWith({
      id: expect.any(Number),
      description: "Nueva Tarea",
      done: false,
    });
    expect(inputText.value).toBe("");
  });

  test("El formulario con una descripción vacía no debe llamar al onNewTodo", () => {
    render(<TodoAdd onNewTodo={onNewTodoMock} />);
    const submitBtn = screen.getByRole("button");

    fireEvent.click(submitBtn);

    expect(onNewTodoMock).not.toHaveBeenCalled();
  });
});
