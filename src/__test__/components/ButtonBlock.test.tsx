import { render } from "@testing-library/react";
import ButtonBlock from "../../components/ButtonBlock";

describe("ButtonBlock Component", () => {
  it("renders button block", () => {
    const { getByTestId } = render(<ButtonBlock />);
    expect(getByTestId("button")).toBeTruthy();
  });

  it("renders button block with props", () => {
    const { getByTestId } = render(<ButtonBlock>Click</ButtonBlock>);
    expect(getByTestId("button")).toHaveTextContent("Click")
  });
});
