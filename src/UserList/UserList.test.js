import { screen, render, within } from "@testing-library/react";
import UserList from "./UserList";

const renderComponent = () => {
  const users = [
    { name: "adham", email: "adham@gmail.com" },
    { name: "hossam", email: "hossam@gmail.com" },
  ];
  render(<UserList users={users} />);
  return { users };
};

test("render one row for each user", () => {
  // First Approach (includes adding 'data-tesid' in the component)
  const { users } = renderComponent();
  // render(<UserList users={users} />);
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  /*
  - Second approach
  const { container } = render(<UserList users={users} />);
  // eslint-disable-next-line
  const rows = container.querySelectorAll("tbody tr");
  */

  expect(rows).toHaveLength(users.length);
});

test("render the email and name for each user", () => {
  const { users } = renderComponent();

  users.forEach((user) => {
    const name = screen.getByRole("cell", { name: user.name, exact: true });
    const email = screen.getByRole("cell", { name: user.email, exact: true });
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});
