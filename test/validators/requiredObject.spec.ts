import { buildValidatorTest } from "../validator-macro.ts";
import { requiredObject } from "../../src/validators/requiredObject.ts";

const testMessage = "This is required";
const validator = requiredObject(testMessage);
const requiredTest = buildValidatorTest(validator, { _self: [testMessage] });

// Deno.test("fails on undefined", () => {
//   requiredTest(undefined, false);
// });
Deno.test("succeeds on empty array", () => {
  requiredTest([], true);
});
Deno.test("succeeds on filled array", () => {
  requiredTest([0], true);
});
Deno.test("succeeds on object", () => {
  requiredTest({}, true);
});
