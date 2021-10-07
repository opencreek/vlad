import { buildValidatorTest } from "../validator-macro.ts";

import { length } from "../../src/validators/length.ts";

const testMessage = "Must be exactly 3 characters long";
const validator = length(3, testMessage);
const minTest = buildValidatorTest(validator, [testMessage]);

// Deno.test("succeeds on undefined", () => {
//   minTest(undefined, true);
// });
Deno.test("succeeds on ASD", () => {
  minTest("ASD", true);
});
Deno.test("succeeds on tre", () => {
  minTest("tre", true);
});
Deno.test("fails on empty string", () => {
  minTest("", false);
});
Deno.test("fails on r", () => {
  minTest("r", false);
});
Deno.test("fails on et", () => {
  minTest("et", false);
});
Deno.test("fails on asdf", () => {
  minTest("asdf", false);
});
Deno.test("fails on qwert", () => {
  minTest("qwert", false);
});
