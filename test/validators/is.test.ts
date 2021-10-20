import { buildValidatorTest } from "../validator-macro.ts";
import { is } from "../../src/validators/is.ts";

const testMessage = "Should be equal";

function isTest<T>(expected: T) {
  const validator = is(expected, testMessage);

  return buildValidatorTest(validator, [testMessage]);
}

Deno.test("numbers", () => {
  const test = isTest(5);

  test(5, true);
  test(10, false);
});
Deno.test("booleans", () => {
  const test = isTest(false);

  test(false, true);
  test(true, false);
});
Deno.test("strings", () => {
  const test = isTest("foo");

  test("foo", true);
  test("bar", false);
});
Deno.test("fails on equal objects", () => {
  const test = isTest({ foo: "bar" });

  test({ foo: "bar" }, false);
});
Deno.test("fails on equal arrays", () => {
  const test = isTest([1, 2]);

  test([1, 2], false);
});
