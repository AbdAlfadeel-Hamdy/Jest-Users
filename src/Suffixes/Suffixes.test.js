import { screen, render } from "@testing-library/react";
import DataForm from "./DataForm";

test("selecting different elements", () => {
  render(<DataForm />);

  const elements = [
    // Most Used Ones
    screen.getByRole("button"),
    screen.getByText(/enter data/i),
    /////////////////////////////
    screen.getByLabelText("Color"),
    screen.getByPlaceholderText("Red"),
    screen.getByDisplayValue("asdf2asdf.com"),
    screen.getByAltText("data"),
    screen.getByTitle("Click when ready to submit"),
    screen.getByTestId("image wrapper"),
  ];

  for (const element of elements) expect(element).toBeInTheDocument();
});
