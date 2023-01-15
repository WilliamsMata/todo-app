import { fireEvent, render, screen } from "@testing-library/react";
import { DeleteBtn } from "../../src/components/DeleteBtn";

describe("Pruebas en <DeleteBtn />", () => {
  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<DeleteBtn />);

    expect(container).toMatchSnapshot();
  });

  test("Al hacer click en el botón debe de llamar el método onClick", () => {
    const onClickMock = jest.fn();

    render(<DeleteBtn onClick={onClickMock} />);
    const btn = screen.getByRole("button");

    fireEvent.click(btn);

    expect(onClickMock).toHaveBeenCalled();
  });

  test("El botón debe ser de color rojo", () => {
    render(<DeleteBtn />);
    const btn = screen.getByRole("button");

    expect(btn.className).toBe("btn btn-danger d-flex");
  });
});
