import { packageName, add } from "./index";

it("exports correct name", () => {
  expect(packageName).toEqual("core");
});

it("adds two numbers", () => {
  expect(add(5, 6)).toEqual(11);
});
