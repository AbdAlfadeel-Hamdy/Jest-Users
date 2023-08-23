import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("Show it has two inputs and one button", () => {
  render(<UserForm />);
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("make sure to addUser when submit form", () => {
  const result = [];
  const callback = (...args) => {
    result.push(args);
  };
  render(<UserForm addUser={callback} />);
  const [nameInput, emailInput] = screen.getAllByRole("textbox");

  user.click(nameInput);
  user.keyboard("adham");

  user.click(emailInput);
  user.keyboard("adham@test.com");

  const button = screen.getByRole("button");

  user.click(button);
  expect(result[0][0]).toEqual({ name: "adham", email: "adham@test.com" });
});
