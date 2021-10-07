import { buildValidatorTest } from "../validator-macro.ts";
import { requiredPrimitive } from "../../src/validators/requiredPrimitive.ts";

const testMessage = "This is required";
const validator = requiredPrimitive(testMessage);
const requiredTest = buildValidatorTest(validator, [testMessage]);

Deno.test("fails on null", () => {
  requiredTest(null, false);
});
Deno.test("fails on undefined", () => {
  requiredTest(undefined, false);
});
Deno.test("succeeds on empty string", () => {
  requiredTest("", true);
});
Deno.test("succeeds on non-empty string", () => {
  requiredTest("asdf", true);
});
Deno.test("succeeds on zero", () => {
  requiredTest(0, true);
});
Deno.test("succeeds on positive number", () => {
  requiredTest(12, true);
});
Deno.test("succeeds on negative number", () => {
  requiredTest(-23, true);
});
Deno.test("succeeds on true", () => {
  requiredTest(true, true);
});
Deno.test("succeeds on false", () => {
  requiredTest(false, true);
});
