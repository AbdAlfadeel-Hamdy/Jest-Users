import { screen, render } from "@testing-library/react";
import IconButton from "./IconButtons";

test("find elements based on label", () => {
  render(<IconButton />);

  const signInButton = screen.getByRole("button", {
    name: /sign in/i,
  });
  const signOutButton = screen.getByRole("button", {
    name: /sign out/i,
  });

  expect(signInButton).toBeInTheDocument();
  expect(signOutButton).toBeInTheDocument();
});
