import { screen, render } from "@testing-library/react";
import AccessibleName from "./AccessibleName";

test("can select by accessible name", () => {
  render(<AccessibleName />);

  const submitButton = screen.getByRole("button", {
    name: /submit/i,
  });
  const closeButton = screen.getByRole("button", {
    name: /close/i,
  });

  expect(submitButton).toBeInTheDocument();
  expect(closeButton).toBeInTheDocument();
});
