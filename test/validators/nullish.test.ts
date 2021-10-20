import { buildValidatorTest } from "../validator-macro.ts";
import { nullish } from "../../src/validators/nullish.ts";

const testMessage = "Should be equal";
const validator = nullish(testMessage);
const nullishTest = buildValidatorTest(validator, [testMessage]);

Deno.test("succeeds on undefined", () => {
  nullishTest(undefined, true);
});
Deno.test("succeeds on null", () => {
  nullishTest(null, true);
});
Deno.test("fails on zero", () => {
  nullishTest(0, false);
});
Deno.test("fails on empty string", () => {
  nullishTest("", false);
});
Deno.test("fails on empty object", () => {
  nullishTest({}, false);
});
Deno.test("fails on empty array", () => {
  nullishTest([], false);
});
