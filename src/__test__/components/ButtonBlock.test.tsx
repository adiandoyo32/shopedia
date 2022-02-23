import { render } from "@testing-library/react";
import ButtonBlock from "../../components/ButtonBlock";

describe("ButtonBlock Component", () => {
  it("renders button block", () => {
    const { getByRole } = render(<ButtonBlock /> );
    expect(getByRole("button")).toBeInTheDocument();
  });

  it("renders button block with props", () => {
    const { getByRole } = render(<ButtonBlock>Click</ButtonBlock>);
    expect(getByRole("button")).toHaveTextContent("Click")
  });
});
