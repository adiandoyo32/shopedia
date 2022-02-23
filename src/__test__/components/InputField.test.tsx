import { render,screen } from "@testing-library/react";
import InputField from "../../components/InputField";

describe("InputField Component", () => {
  it("renders input", () => {
    const { getByTestId } = render(<InputField />);
    const inputField = getByTestId("input");
    expect(inputField).toBeTruthy();
  });

  it("renders input with props", () => {
    const { getByTestId, getByPlaceholderText } = render(<InputField label="Label" />);
    expect(getByTestId("inputField")).toHaveTextContent("Label")
    expect(getByPlaceholderText("Label"))
  });
});
