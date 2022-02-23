import { render, fireEvent } from "@testing-library/react";
import InputField from "../../components/InputField";

describe("InputField Component", () => {
  it("renders input", () => {
    const { getByRole } = render(<InputField />);
    expect(getByRole("textbox")).toBeInTheDocument();
  });

  it("renders input with props", () => {
    const { getByLabelText, getByRole, getByPlaceholderText } = render(<InputField label="Label" />);
    expect(getByRole("textbox")).toBeInTheDocument();
    expect(getByLabelText("Label")).toBeInTheDocument();
    expect(getByPlaceholderText("Label")).toBeInTheDocument()
  });

  it("change in input value", () => {
    const { getByRole } = render(<InputField label="Label" />);
    const input = getByRole("textbox") as HTMLInputElement
    fireEvent.change(input, { target: { value: "example" } })
    expect(input.value).toBe('example')
  })
});
