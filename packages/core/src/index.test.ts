import { packageName } from "./index";

it("exports correct name", () => {
  expect(packageName).toEqual("core");
});
