import { render, screen } from "@testing-library/react";
import RoleExample from "./RoleExample";

test("can find all roles", () => {
  render(<RoleExample />);

  const roles = [
    "link",
    "button",
    "contentinfo",
    "heading",
    "banner",
    "img",
    "checkbox",
    "spinbutton",
    "radio",
    "textbox",
    "listitem",
    "list",
  ];

  roles.forEach((role) => {
    const el = screen.getByRole(role);

    expect(el).toBeInTheDocument();
  });
});
