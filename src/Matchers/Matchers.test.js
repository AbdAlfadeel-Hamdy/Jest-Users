import { screen, render, within } from "@testing-library/react";
import FormData from "./Formdata";

test("the form displays two buttons", () => {
  render(<FormData />);

  const form = screen.getByRole("form");

  expect(form).toContainRole("button", 2);
});

const toContainRole = (container, role, quantity = 1) => {
  const elements = within(container).getAllByRole(role);
  if (elements.length === quantity)
    return {
      pass: true,
    };

  return {
    pass: false,
    message: () => `Expected to find ${quantity} ${role} elements.
    Found ${elements.length} instead.
    `,
  };
};

expect.extend({ toContainRole });
