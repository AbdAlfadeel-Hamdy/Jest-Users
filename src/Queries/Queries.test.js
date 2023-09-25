import { screen, render } from "@testing-library/react";
import ColorList from "./ColorList";
import LoadedColorList from "./LoadedColorList";

test("getBy, queryBy, findBy finding 0 elements", async () => {
  render(<ColorList />);

  expect(() => screen.getByRole("textbox")).toThrow();
  expect(screen.queryByRole("textbox")).toEqual(null);
  let thrownErr = false;
  try {
    await screen.findByRole("textbox");
  } catch (err) {
    thrownErr = true;
  }
  expect(thrownErr).toEqual(true);
});

test("getBy, queryBy, findBy finding 1 element", async () => {
  render(<ColorList />);

  expect(screen.getByRole("list")).toBeInTheDocument();
  expect(screen.queryByRole("list")).toBeInTheDocument();
  expect(await screen.findByRole("list")).toBeInTheDocument();
});

test("getBy, queryBy, findBy finding > 1 element", async () => {
  render(<ColorList />);

  expect(() => screen.getByRole("listitem")).toThrow();
  expect(() => screen.queryByRole("listitem")).toThrow();
  let thrownErr = false;
  try {
    await screen.findByRole("listitem");
  } catch (err) {
    thrownErr = true;
  }
  expect(thrownErr).toEqual(true);
});

test("getAllBy, queryAllBy, findAllBy", async () => {
  render(<ColorList />);

  expect(screen.getAllByRole("listitem")).toHaveLength(3);
  expect(screen.queryAllByRole("listitem")).toHaveLength(3);
  expect(await screen.findAllByRole("listitem")).toHaveLength(3);
});

test("favor getBy when checking element exists", async () => {
  render(<ColorList />);
  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();
});

test("favor queryBy when checking element does not exists", async () => {
  render(<ColorList />);
  const list = screen.queryByRole("textbox");
  expect(list).toEqual(null);
});

test("favor findBy or findAllBy when data fetching", async () => {
  render(<LoadedColorList />);

  const colors = await screen.findAllByRole("listitem");

  expect(colors).toHaveLength(3);
});
